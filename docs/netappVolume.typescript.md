# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktn/provider-azurerm.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktn/provider-azurerm.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolume(scope: Construct, id: string, config: NetappVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess">putCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware">putDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy">putDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication">putDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy">putDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule">putExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit">resetAcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled">resetAzureVmwareDataStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetBreakthroughModeEnabled">resetBreakthroughModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess">resetCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId">resetCreateFromSnapshotResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware">resetDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy">resetDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication">resetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy">resetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource">resetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule">resetExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled">resetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId">resetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled">resetLargeVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures">resetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled">resetSmb3ProtocolEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled">resetSmbAccessBasedEnumerationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled">resetSmbContinuousAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled">resetSmbNonBrowsableEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible">resetSnapshotDirectoryVisible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps">resetThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCoolAccess` <a name="putCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess"></a>

```typescript
public putCoolAccess(value: NetappVolumeCoolAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `putDataProtectionAdvancedRansomware` <a name="putDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware"></a>

```typescript
public putDataProtectionAdvancedRansomware(value: NetappVolumeDataProtectionAdvancedRansomware): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `putDataProtectionBackupPolicy` <a name="putDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy"></a>

```typescript
public putDataProtectionBackupPolicy(value: NetappVolumeDataProtectionBackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `putDataProtectionReplication` <a name="putDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication"></a>

```typescript
public putDataProtectionReplication(value: NetappVolumeDataProtectionReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `putDataProtectionSnapshotPolicy` <a name="putDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy"></a>

```typescript
public putDataProtectionSnapshotPolicy(value: NetappVolumeDataProtectionSnapshotPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `putExportPolicyRule` <a name="putExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule"></a>

```typescript
public putExportPolicyRule(value: IResolvable | NetappVolumeExportPolicyRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `resetAcceptGrowCapacityPoolForShortTermCloneSplit` <a name="resetAcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit"></a>

```typescript
public resetAcceptGrowCapacityPoolForShortTermCloneSplit(): void
```

##### `resetAzureVmwareDataStoreEnabled` <a name="resetAzureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled"></a>

```typescript
public resetAzureVmwareDataStoreEnabled(): void
```

##### `resetBreakthroughModeEnabled` <a name="resetBreakthroughModeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetBreakthroughModeEnabled"></a>

```typescript
public resetBreakthroughModeEnabled(): void
```

##### `resetCoolAccess` <a name="resetCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess"></a>

```typescript
public resetCoolAccess(): void
```

##### `resetCreateFromSnapshotResourceId` <a name="resetCreateFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId"></a>

```typescript
public resetCreateFromSnapshotResourceId(): void
```

##### `resetDataProtectionAdvancedRansomware` <a name="resetDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware"></a>

```typescript
public resetDataProtectionAdvancedRansomware(): void
```

##### `resetDataProtectionBackupPolicy` <a name="resetDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy"></a>

```typescript
public resetDataProtectionBackupPolicy(): void
```

##### `resetDataProtectionReplication` <a name="resetDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication"></a>

```typescript
public resetDataProtectionReplication(): void
```

##### `resetDataProtectionSnapshotPolicy` <a name="resetDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy"></a>

```typescript
public resetDataProtectionSnapshotPolicy(): void
```

##### `resetEncryptionKeySource` <a name="resetEncryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource"></a>

```typescript
public resetEncryptionKeySource(): void
```

##### `resetExportPolicyRule` <a name="resetExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule"></a>

```typescript
public resetExportPolicyRule(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosEnabled` <a name="resetKerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```typescript
public resetKerberosEnabled(): void
```

##### `resetKeyVaultPrivateEndpointId` <a name="resetKeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId"></a>

```typescript
public resetKeyVaultPrivateEndpointId(): void
```

##### `resetLargeVolumeEnabled` <a name="resetLargeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled"></a>

```typescript
public resetLargeVolumeEnabled(): void
```

##### `resetNetworkFeatures` <a name="resetNetworkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures"></a>

```typescript
public resetNetworkFeatures(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle"></a>

```typescript
public resetSecurityStyle(): void
```

##### `resetSmb3ProtocolEncryptionEnabled` <a name="resetSmb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled"></a>

```typescript
public resetSmb3ProtocolEncryptionEnabled(): void
```

##### `resetSmbAccessBasedEnumerationEnabled` <a name="resetSmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled"></a>

```typescript
public resetSmbAccessBasedEnumerationEnabled(): void
```

##### `resetSmbContinuousAvailabilityEnabled` <a name="resetSmbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled"></a>

```typescript
public resetSmbContinuousAvailabilityEnabled(): void
```

##### `resetSmbNonBrowsableEnabled` <a name="resetSmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled"></a>

```typescript
public resetSmbNonBrowsableEnabled(): void
```

##### `resetSnapshotDirectoryVisible` <a name="resetSnapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible"></a>

```typescript
public resetSnapshotDirectoryVisible(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughputInMibps` <a name="resetThroughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps"></a>

```typescript
public resetThroughputInMibps(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

netappVolume.NetappVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

netappVolume.NetappVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

netappVolume.NetappVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

netappVolume.NetappVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess">coolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware">dataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy">dataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule">exportPolicyRule</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountTarget">mountTarget</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList">NetappVolumeMountTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput">acceptGrowCapacityPoolForShortTermCloneSplitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput">azureVmwareDataStoreEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.breakthroughModeEnabledInput">breakthroughModeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput">coolAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput">createFromSnapshotResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput">dataProtectionAdvancedRansomwareInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput">dataProtectionBackupPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput">dataProtectionReplicationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput">dataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput">encryptionKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput">exportPolicyRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput">kerberosEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput">keyVaultPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput">largeVolumeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput">networkFeaturesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput">serviceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput">smb3ProtocolEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput">smbAccessBasedEnumerationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput">smbContinuousAvailabilityEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput">smbNonBrowsableEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput">snapshotDirectoryVisibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput">storageQuotaInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput">throughputInMibpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput">volumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit">acceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.breakthroughModeEnabled">breakthroughModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource">encryptionKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled">largeVolumeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures">networkFeatures</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled">smb3ProtocolEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled">smbAccessBasedEnumerationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled">smbContinuousAvailabilityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled">smbNonBrowsableEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps">throughputInMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath">volumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coolAccess`<sup>Required</sup> <a name="coolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess"></a>

```typescript
public readonly coolAccess: NetappVolumeCoolAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a>

---

##### `dataProtectionAdvancedRansomware`<sup>Required</sup> <a name="dataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware"></a>

```typescript
public readonly dataProtectionAdvancedRansomware: NetappVolumeDataProtectionAdvancedRansomwareOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a>

---

##### `dataProtectionBackupPolicy`<sup>Required</sup> <a name="dataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy"></a>

```typescript
public readonly dataProtectionBackupPolicy: NetappVolumeDataProtectionBackupPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a>

---

##### `dataProtectionReplication`<sup>Required</sup> <a name="dataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication"></a>

```typescript
public readonly dataProtectionReplication: NetappVolumeDataProtectionReplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a>

---

##### `dataProtectionSnapshotPolicy`<sup>Required</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy"></a>

```typescript
public readonly dataProtectionSnapshotPolicy: NetappVolumeDataProtectionSnapshotPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `exportPolicyRule`<sup>Required</sup> <a name="exportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule"></a>

```typescript
public readonly exportPolicyRule: NetappVolumeExportPolicyRuleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a>

---

##### `mountTarget`<sup>Required</sup> <a name="mountTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountTarget"></a>

```typescript
public readonly mountTarget: NetappVolumeMountTargetList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList">NetappVolumeMountTargetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `acceptGrowCapacityPoolForShortTermCloneSplitInput`<sup>Optional</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplitInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput"></a>

```typescript
public readonly acceptGrowCapacityPoolForShortTermCloneSplitInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `azureVmwareDataStoreEnabledInput`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput"></a>

```typescript
public readonly azureVmwareDataStoreEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `breakthroughModeEnabledInput`<sup>Optional</sup> <a name="breakthroughModeEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.breakthroughModeEnabledInput"></a>

```typescript
public readonly breakthroughModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `coolAccessInput`<sup>Optional</sup> <a name="coolAccessInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput"></a>

```typescript
public readonly coolAccessInput: NetappVolumeCoolAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `createFromSnapshotResourceIdInput`<sup>Optional</sup> <a name="createFromSnapshotResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput"></a>

```typescript
public readonly createFromSnapshotResourceIdInput: string;
```

- *Type:* string

---

##### `dataProtectionAdvancedRansomwareInput`<sup>Optional</sup> <a name="dataProtectionAdvancedRansomwareInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput"></a>

```typescript
public readonly dataProtectionAdvancedRansomwareInput: NetappVolumeDataProtectionAdvancedRansomware;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `dataProtectionBackupPolicyInput`<sup>Optional</sup> <a name="dataProtectionBackupPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput"></a>

```typescript
public readonly dataProtectionBackupPolicyInput: NetappVolumeDataProtectionBackupPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `dataProtectionReplicationInput`<sup>Optional</sup> <a name="dataProtectionReplicationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput"></a>

```typescript
public readonly dataProtectionReplicationInput: NetappVolumeDataProtectionReplication;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `dataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput"></a>

```typescript
public readonly dataProtectionSnapshotPolicyInput: NetappVolumeDataProtectionSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `encryptionKeySourceInput`<sup>Optional</sup> <a name="encryptionKeySourceInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput"></a>

```typescript
public readonly encryptionKeySourceInput: string;
```

- *Type:* string

---

##### `exportPolicyRuleInput`<sup>Optional</sup> <a name="exportPolicyRuleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput"></a>

```typescript
public readonly exportPolicyRuleInput: IResolvable | NetappVolumeExportPolicyRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosEnabledInput`<sup>Optional</sup> <a name="kerberosEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```typescript
public readonly kerberosEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="keyVaultPrivateEndpointIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput"></a>

```typescript
public readonly keyVaultPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `largeVolumeEnabledInput`<sup>Optional</sup> <a name="largeVolumeEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput"></a>

```typescript
public readonly largeVolumeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFeaturesInput`<sup>Optional</sup> <a name="networkFeaturesInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput"></a>

```typescript
public readonly networkFeaturesInput: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput"></a>

```typescript
public readonly securityStyleInput: string;
```

- *Type:* string

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput"></a>

```typescript
public readonly serviceLevelInput: string;
```

- *Type:* string

---

##### `smb3ProtocolEncryptionEnabledInput`<sup>Optional</sup> <a name="smb3ProtocolEncryptionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput"></a>

```typescript
public readonly smb3ProtocolEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbAccessBasedEnumerationEnabledInput`<sup>Optional</sup> <a name="smbAccessBasedEnumerationEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput"></a>

```typescript
public readonly smbAccessBasedEnumerationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbContinuousAvailabilityEnabledInput`<sup>Optional</sup> <a name="smbContinuousAvailabilityEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput"></a>

```typescript
public readonly smbContinuousAvailabilityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbNonBrowsableEnabledInput`<sup>Optional</sup> <a name="smbNonBrowsableEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput"></a>

```typescript
public readonly smbNonBrowsableEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="snapshotDirectoryVisibleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput"></a>

```typescript
public readonly snapshotDirectoryVisibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageQuotaInGbInput`<sup>Optional</sup> <a name="storageQuotaInGbInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput"></a>

```typescript
public readonly storageQuotaInGbInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInMibpsInput`<sup>Optional</sup> <a name="throughputInMibpsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput"></a>

```typescript
public readonly throughputInMibpsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput"></a>

```typescript
public readonly volumePathInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `acceptGrowCapacityPoolForShortTermCloneSplit`<sup>Required</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```typescript
public readonly acceptGrowCapacityPoolForShortTermCloneSplit: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `azureVmwareDataStoreEnabled`<sup>Required</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled"></a>

```typescript
public readonly azureVmwareDataStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `breakthroughModeEnabled`<sup>Required</sup> <a name="breakthroughModeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.breakthroughModeEnabled"></a>

```typescript
public readonly breakthroughModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `createFromSnapshotResourceId`<sup>Required</sup> <a name="createFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId"></a>

```typescript
public readonly createFromSnapshotResourceId: string;
```

- *Type:* string

---

##### `encryptionKeySource`<sup>Required</sup> <a name="encryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource"></a>

```typescript
public readonly encryptionKeySource: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kerberosEnabled`<sup>Required</sup> <a name="kerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyVaultPrivateEndpointId`<sup>Required</sup> <a name="keyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId"></a>

```typescript
public readonly keyVaultPrivateEndpointId: string;
```

- *Type:* string

---

##### `largeVolumeEnabled`<sup>Required</sup> <a name="largeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled"></a>

```typescript
public readonly largeVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFeatures`<sup>Required</sup> <a name="networkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures"></a>

```typescript
public readonly networkFeatures: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

---

##### `smb3ProtocolEncryptionEnabled`<sup>Required</sup> <a name="smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled"></a>

```typescript
public readonly smb3ProtocolEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbAccessBasedEnumerationEnabled`<sup>Required</sup> <a name="smbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled"></a>

```typescript
public readonly smbAccessBasedEnumerationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbContinuousAvailabilityEnabled`<sup>Required</sup> <a name="smbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled"></a>

```typescript
public readonly smbContinuousAvailabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `smbNonBrowsableEnabled`<sup>Required</sup> <a name="smbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled"></a>

```typescript
public readonly smbNonBrowsableEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotDirectoryVisible`<sup>Required</sup> <a name="snapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible"></a>

```typescript
public readonly snapshotDirectoryVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb"></a>

```typescript
public readonly storageQuotaInGb: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInMibps`<sup>Required</sup> <a name="throughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps"></a>

```typescript
public readonly throughputInMibps: number;
```

- *Type:* number

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeConfig: netappVolume.NetappVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName">poolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath">volumePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit">acceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>string</code> | While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled">azureVmwareDataStoreEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.breakthroughModeEnabled">breakthroughModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the large volume runs in Breakthrough Mode, placing it on dedicated capacity that delivers higher throughput and larger capacity. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess">coolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | cool_access block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId">createFromSnapshotResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware">dataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | data_protection_advanced_ransomware block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy">dataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | data_protection_backup_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource">encryptionKeySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule">exportPolicyRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | export_policy_rule block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable to allow Kerberos secured volumes. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled">largeVolumeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the volume is a large volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures">networkFeatures</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled">smb3ProtocolEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled">smbAccessBasedEnumerationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable access based enumeration setting for SMB/Dual Protocol volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled">smbContinuousAvailabilityEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Continuous availability option should be used only for SQL and FSLogix workloads. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled">smbNonBrowsableEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps">throughputInMibps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb"></a>

```typescript
public readonly storageQuotaInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `acceptGrowCapacityPoolForShortTermCloneSplit`<sup>Optional</sup> <a name="acceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```typescript
public readonly acceptGrowCapacityPoolForShortTermCloneSplit: string;
```

- *Type:* string

While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing.

To accept capacity pool size auto grow and create a short term clone volume, set the property as accepted. Can only be used in conjunction with `create_from_snapshot_resource_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#accept_grow_capacity_pool_for_short_term_clone_split NetappVolume#accept_grow_capacity_pool_for_short_term_clone_split}

---

##### `azureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="azureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled"></a>

```typescript
public readonly azureVmwareDataStoreEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `breakthroughModeEnabled`<sup>Optional</sup> <a name="breakthroughModeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.breakthroughModeEnabled"></a>

```typescript
public readonly breakthroughModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the large volume runs in Breakthrough Mode, placing it on dedicated capacity that delivers higher throughput and larger capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#breakthrough_mode_enabled NetappVolume#breakthrough_mode_enabled}

---

##### `coolAccess`<sup>Optional</sup> <a name="coolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess"></a>

```typescript
public readonly coolAccess: NetappVolumeCoolAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

cool_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#cool_access NetappVolume#cool_access}

---

##### `createFromSnapshotResourceId`<sup>Optional</sup> <a name="createFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId"></a>

```typescript
public readonly createFromSnapshotResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `dataProtectionAdvancedRansomware`<sup>Optional</sup> <a name="dataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware"></a>

```typescript
public readonly dataProtectionAdvancedRansomware: NetappVolumeDataProtectionAdvancedRansomware;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

data_protection_advanced_ransomware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#data_protection_advanced_ransomware NetappVolume#data_protection_advanced_ransomware}

---

##### `dataProtectionBackupPolicy`<sup>Optional</sup> <a name="dataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy"></a>

```typescript
public readonly dataProtectionBackupPolicy: NetappVolumeDataProtectionBackupPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

data_protection_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#data_protection_backup_policy NetappVolume#data_protection_backup_policy}

---

##### `dataProtectionReplication`<sup>Optional</sup> <a name="dataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication"></a>

```typescript
public readonly dataProtectionReplication: NetappVolumeDataProtectionReplication;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `dataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy"></a>

```typescript
public readonly dataProtectionSnapshotPolicy: NetappVolumeDataProtectionSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `encryptionKeySource`<sup>Optional</sup> <a name="encryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource"></a>

```typescript
public readonly encryptionKeySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}.

---

##### `exportPolicyRule`<sup>Optional</sup> <a name="exportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule"></a>

```typescript
public readonly exportPolicyRule: IResolvable | NetappVolumeExportPolicyRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable to allow Kerberos secured volumes.

Requires appropriate export rules as well as the parent `azurerm_netapp_account` having a defined AD connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `keyVaultPrivateEndpointId`<sup>Optional</sup> <a name="keyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId"></a>

```typescript
public readonly keyVaultPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}.

---

##### `largeVolumeEnabled`<sup>Optional</sup> <a name="largeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled"></a>

```typescript
public readonly largeVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the volume is a large volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#large_volume_enabled NetappVolume#large_volume_enabled}

---

##### `networkFeatures`<sup>Optional</sup> <a name="networkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures"></a>

```typescript
public readonly networkFeatures: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `smb3ProtocolEncryptionEnabled`<sup>Optional</sup> <a name="smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled"></a>

```typescript
public readonly smb3ProtocolEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#smb3_protocol_encryption_enabled NetappVolume#smb3_protocol_encryption_enabled}

---

##### `smbAccessBasedEnumerationEnabled`<sup>Optional</sup> <a name="smbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled"></a>

```typescript
public readonly smbAccessBasedEnumerationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable access based enumeration setting for SMB/Dual Protocol volume.

When enabled, users who do not have permission to access a shared folder or file underneath it, do not see that shared resource displayed in their environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#smb_access_based_enumeration_enabled NetappVolume#smb_access_based_enumeration_enabled}

---

##### `smbContinuousAvailabilityEnabled`<sup>Optional</sup> <a name="smbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled"></a>

```typescript
public readonly smbContinuousAvailabilityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Continuous availability option should be used only for SQL and FSLogix workloads.

Using it for any other SMB workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#smb_continuous_availability_enabled NetappVolume#smb_continuous_availability_enabled}

---

##### `smbNonBrowsableEnabled`<sup>Optional</sup> <a name="smbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled"></a>

```typescript
public readonly smbNonBrowsableEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#smb_non_browsable_enabled NetappVolume#smb_non_browsable_enabled}

---

##### `snapshotDirectoryVisible`<sup>Optional</sup> <a name="snapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible"></a>

```typescript
public readonly snapshotDirectoryVisible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `throughputInMibps`<sup>Optional</sup> <a name="throughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps"></a>

```typescript
public readonly throughputInMibps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

### NetappVolumeCoolAccess <a name="NetappVolumeCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeCoolAccess: netappVolume.NetappVolumeCoolAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays">coolnessPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy">retrievalPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy">tieringPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}. |

---

##### `coolnessPeriodInDays`<sup>Required</sup> <a name="coolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays"></a>

```typescript
public readonly coolnessPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}.

---

##### `retrievalPolicy`<sup>Required</sup> <a name="retrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy"></a>

```typescript
public readonly retrievalPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}.

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}.

---

### NetappVolumeDataProtectionAdvancedRansomware <a name="NetappVolumeDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeDataProtectionAdvancedRansomware: netappVolume.NetappVolumeDataProtectionAdvancedRansomware = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled">protectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable or disable the Advanced Ransomware Protection feature. |

---

##### `protectionEnabled`<sup>Required</sup> <a name="protectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled"></a>

```typescript
public readonly protectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable or disable the Advanced Ransomware Protection feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#protection_enabled NetappVolume#protection_enabled}

---

### NetappVolumeDataProtectionBackupPolicy <a name="NetappVolumeDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeDataProtectionBackupPolicy: netappVolume.NetappVolumeDataProtectionBackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | The ID of the backup policy to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | The ID of the backup vault to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups. |

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

The ID of the backup policy to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#backup_policy_id NetappVolume#backup_policy_id}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

The ID of the backup vault to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#backup_vault_id NetappVolume#backup_vault_id}

---

##### `policyEnabled`<sup>Optional</sup> <a name="policyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#policy_enabled NetappVolume#policy_enabled}

---

### NetappVolumeDataProtectionReplication <a name="NetappVolumeDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeDataProtectionReplication: netappVolume.NetappVolumeDataProtectionReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency">replicationFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}. |

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```typescript
public readonly remoteVolumeLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}.

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```typescript
public readonly remoteVolumeResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}.

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency"></a>

```typescript
public readonly replicationFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}.

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}.

---

### NetappVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeDataProtectionSnapshotPolicy: netappVolume.NetappVolumeDataProtectionSnapshotPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}. |

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```typescript
public readonly snapshotPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}.

---

### NetappVolumeExportPolicyRule <a name="NetappVolumeExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeExportPolicyRule: netappVolume.NetappVolumeExportPolicyRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex">ruleIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled">kerberos5IReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled">kerberos5IReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled">kerberos5PReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled">kerberos5PReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled">kerberos5ReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled">kerberos5ReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol">protocol</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly">unixReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite">unixReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}. |

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}.

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex"></a>

```typescript
public readonly ruleIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}.

---

##### `kerberos5IReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled"></a>

```typescript
public readonly kerberos5IReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}.

---

##### `kerberos5IReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled"></a>

```typescript
public readonly kerberos5IReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}.

---

##### `kerberos5PReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled"></a>

```typescript
public readonly kerberos5PReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}.

---

##### `kerberos5PReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled"></a>

```typescript
public readonly kerberos5PReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}.

---

##### `kerberos5ReadOnlyEnabled`<sup>Optional</sup> <a name="kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled"></a>

```typescript
public readonly kerberos5ReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}.

---

##### `kerberos5ReadWriteEnabled`<sup>Optional</sup> <a name="kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled"></a>

```typescript
public readonly kerberos5ReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol"></a>

```typescript
public readonly protocol: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}.

---

##### `rootAccessEnabled`<sup>Optional</sup> <a name="rootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```typescript
public readonly rootAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}.

---

##### `unixReadOnly`<sup>Optional</sup> <a name="unixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly"></a>

```typescript
public readonly unixReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}.

---

##### `unixReadWrite`<sup>Optional</sup> <a name="unixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite"></a>

```typescript
public readonly unixReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}.

---

### NetappVolumeMountTarget <a name="NetappVolumeMountTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeMountTarget: netappVolume.NetappVolumeMountTarget = { ... }
```


### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

const netappVolumeTimeouts: netappVolume.NetappVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#read NetappVolume#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#read NetappVolume#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeCoolAccessOutputReference <a name="NetappVolumeCoolAccessOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeCoolAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput">coolnessPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput">retrievalPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays">coolnessPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy">retrievalPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy">tieringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolnessPeriodInDaysInput`<sup>Optional</sup> <a name="coolnessPeriodInDaysInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput"></a>

```typescript
public readonly coolnessPeriodInDaysInput: number;
```

- *Type:* number

---

##### `retrievalPolicyInput`<sup>Optional</sup> <a name="retrievalPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput"></a>

```typescript
public readonly retrievalPolicyInput: string;
```

- *Type:* string

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: string;
```

- *Type:* string

---

##### `coolnessPeriodInDays`<sup>Required</sup> <a name="coolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays"></a>

```typescript
public readonly coolnessPeriodInDays: number;
```

- *Type:* number

---

##### `retrievalPolicy`<sup>Required</sup> <a name="retrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy"></a>

```typescript
public readonly retrievalPolicy: string;
```

- *Type:* string

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeCoolAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---


### NetappVolumeDataProtectionAdvancedRansomwareOutputReference <a name="NetappVolumeDataProtectionAdvancedRansomwareOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput">protectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled">protectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protectionEnabledInput`<sup>Optional</sup> <a name="protectionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput"></a>

```typescript
public readonly protectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protectionEnabled`<sup>Required</sup> <a name="protectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled"></a>

```typescript
public readonly protectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeDataProtectionAdvancedRansomware;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---


### NetappVolumeDataProtectionBackupPolicyOutputReference <a name="NetappVolumeDataProtectionBackupPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled">resetPolicyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyEnabled` <a name="resetPolicyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled"></a>

```typescript
public resetPolicyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput">policyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput"></a>

```typescript
public readonly backupPolicyIdInput: string;
```

- *Type:* string

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput"></a>

```typescript
public readonly backupVaultIdInput: string;
```

- *Type:* string

---

##### `policyEnabledInput`<sup>Optional</sup> <a name="policyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput"></a>

```typescript
public readonly policyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

---

##### `policyEnabled`<sup>Required</sup> <a name="policyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeDataProtectionBackupPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---


### NetappVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeDataProtectionReplicationOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeDataProtectionReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">remoteVolumeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">remoteVolumeResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">replicationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replicationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `remoteVolumeLocationInput`<sup>Optional</sup> <a name="remoteVolumeLocationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```typescript
public readonly remoteVolumeLocationInput: string;
```

- *Type:* string

---

##### `remoteVolumeResourceIdInput`<sup>Optional</sup> <a name="remoteVolumeResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```typescript
public readonly remoteVolumeResourceIdInput: string;
```

- *Type:* string

---

##### `replicationFrequencyInput`<sup>Optional</sup> <a name="replicationFrequencyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```typescript
public readonly replicationFrequencyInput: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```typescript
public readonly remoteVolumeLocation: string;
```

- *Type:* string

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```typescript
public readonly remoteVolumeResourceId: string;
```

- *Type:* string

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```typescript
public readonly replicationFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeDataProtectionReplication;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---


### NetappVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">snapshotPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `snapshotPolicyIdInput`<sup>Optional</sup> <a name="snapshotPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```typescript
public readonly snapshotPolicyIdInput: string;
```

- *Type:* string

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```typescript
public readonly snapshotPolicyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeDataProtectionSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeExportPolicyRuleList <a name="NetappVolumeExportPolicyRuleList" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeExportPolicyRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get"></a>

```typescript
public get(index: number): NetappVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeExportPolicyRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---


### NetappVolumeExportPolicyRuleOutputReference <a name="NetappVolumeExportPolicyRuleOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeExportPolicyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled">resetKerberos5IReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled">resetKerberos5IReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled">resetKerberos5PReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled">resetKerberos5PReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled">resetKerberos5ReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled">resetKerberos5ReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">resetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">resetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">resetUnixReadWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKerberos5IReadOnlyEnabled` <a name="resetKerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled"></a>

```typescript
public resetKerberos5IReadOnlyEnabled(): void
```

##### `resetKerberos5IReadWriteEnabled` <a name="resetKerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled"></a>

```typescript
public resetKerberos5IReadWriteEnabled(): void
```

##### `resetKerberos5PReadOnlyEnabled` <a name="resetKerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled"></a>

```typescript
public resetKerberos5PReadOnlyEnabled(): void
```

##### `resetKerberos5PReadWriteEnabled` <a name="resetKerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled"></a>

```typescript
public resetKerberos5PReadWriteEnabled(): void
```

##### `resetKerberos5ReadOnlyEnabled` <a name="resetKerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled"></a>

```typescript
public resetKerberos5ReadOnlyEnabled(): void
```

##### `resetKerberos5ReadWriteEnabled` <a name="resetKerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled"></a>

```typescript
public resetKerberos5ReadWriteEnabled(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRootAccessEnabled` <a name="resetRootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```typescript
public resetRootAccessEnabled(): void
```

##### `resetUnixReadOnly` <a name="resetUnixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```typescript
public resetUnixReadOnly(): void
```

##### `resetUnixReadWrite` <a name="resetUnixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```typescript
public resetUnixReadWrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput">kerberos5IReadOnlyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput">kerberos5IReadWriteEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput">kerberos5PReadOnlyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput">kerberos5PReadWriteEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput">kerberos5ReadOnlyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput">kerberos5ReadWriteEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">rootAccessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">ruleIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">unixReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">unixReadWriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled">kerberos5IReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled">kerberos5IReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled">kerberos5PReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled">kerberos5PReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled">kerberos5ReadOnlyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled">kerberos5ReadWriteEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol">protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex">ruleIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unixReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unixReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string[];
```

- *Type:* string[]

---

##### `kerberos5IReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5IReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput"></a>

```typescript
public readonly kerberos5IReadOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5IReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5IReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput"></a>

```typescript
public readonly kerberos5IReadWriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5PReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput"></a>

```typescript
public readonly kerberos5PReadOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5PReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput"></a>

```typescript
public readonly kerberos5PReadWriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadOnlyEnabledInput`<sup>Optional</sup> <a name="kerberos5ReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput"></a>

```typescript
public readonly kerberos5ReadOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadWriteEnabledInput`<sup>Optional</sup> <a name="kerberos5ReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput"></a>

```typescript
public readonly kerberos5ReadWriteEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string[];
```

- *Type:* string[]

---

##### `rootAccessEnabledInput`<sup>Optional</sup> <a name="rootAccessEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```typescript
public readonly rootAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ruleIndexInput`<sup>Optional</sup> <a name="ruleIndexInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```typescript
public readonly ruleIndexInput: number;
```

- *Type:* number

---

##### `unixReadOnlyInput`<sup>Optional</sup> <a name="unixReadOnlyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```typescript
public readonly unixReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `unixReadWriteInput`<sup>Optional</sup> <a name="unixReadWriteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```typescript
public readonly unixReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

---

##### `kerberos5IReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled"></a>

```typescript
public readonly kerberos5IReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5IReadWriteEnabled`<sup>Required</sup> <a name="kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled"></a>

```typescript
public readonly kerberos5IReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled"></a>

```typescript
public readonly kerberos5PReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadWriteEnabled`<sup>Required</sup> <a name="kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled"></a>

```typescript
public readonly kerberos5PReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadOnlyEnabled`<sup>Required</sup> <a name="kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled"></a>

```typescript
public readonly kerberos5ReadOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadWriteEnabled`<sup>Required</sup> <a name="kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled"></a>

```typescript
public readonly kerberos5ReadWriteEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string[];
```

- *Type:* string[]

---

##### `rootAccessEnabled`<sup>Required</sup> <a name="rootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```typescript
public readonly rootAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```typescript
public readonly ruleIndex: number;
```

- *Type:* number

---

##### `unixReadOnly`<sup>Required</sup> <a name="unixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```typescript
public readonly unixReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `unixReadWrite`<sup>Required</sup> <a name="unixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```typescript
public readonly unixReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeExportPolicyRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>

---


### NetappVolumeMountTargetList <a name="NetappVolumeMountTargetList" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeMountTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get"></a>

```typescript
public get(index: number): NetappVolumeMountTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetappVolumeMountTargetOutputReference <a name="NetappVolumeMountTargetOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeMountTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.smbServerFqdn">smbServerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget">NetappVolumeMountTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `smbServerFqdn`<sup>Required</sup> <a name="smbServerFqdn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.smbServerFqdn"></a>

```typescript
public readonly smbServerFqdn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeMountTarget;
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeMountTarget">NetappVolumeMountTarget</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-azurerm'

new netappVolume.NetappVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---



