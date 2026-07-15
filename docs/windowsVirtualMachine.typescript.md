# `windowsVirtualMachine` Submodule <a name="`windowsVirtualMachine` Submodule" id="@cdktn/provider-azurerm.windowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachine <a name="WindowsVirtualMachine" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine azurerm_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachine(scope: Construct, id: string, config: WindowsVirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig">WindowsVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities">putAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent">putAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication">putGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification">putOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference">putSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification">putTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener">putWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities">resetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent">resetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations">resetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAutomaticUpdatesEnabled">resetAutomaticUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled">resetBypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId">resetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName">resetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId">resetDedicatedHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType">resetDiskControllerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates">resetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget">resetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication">resetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled">resetHotpatchingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice">resetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification">resetOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsManagedDiskId">resetOsManagedDiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode">resetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode">resetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain">resetPlatformFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId">resetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting">resetRebootSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled">resetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference">resetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification">resetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId">resetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled">resetVmAgentPlatformUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled">resetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener">resetWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalCapabilities` <a name="putAdditionalCapabilities" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities"></a>

```typescript
public putAdditionalCapabilities(value: WindowsVirtualMachineAdditionalCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `putAdditionalUnattendContent` <a name="putAdditionalUnattendContent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent"></a>

```typescript
public putAdditionalUnattendContent(value: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics"></a>

```typescript
public putBootDiagnostics(value: WindowsVirtualMachineBootDiagnostics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `putGalleryApplication` <a name="putGalleryApplication" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication"></a>

```typescript
public putGalleryApplication(value: IResolvable | WindowsVirtualMachineGalleryApplication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity"></a>

```typescript
public putIdentity(value: WindowsVirtualMachineIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk"></a>

```typescript
public putOsDisk(value: WindowsVirtualMachineOsDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `putOsImageNotification` <a name="putOsImageNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification"></a>

```typescript
public putOsImageNotification(value: WindowsVirtualMachineOsImageNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `putPlan` <a name="putPlan" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan"></a>

```typescript
public putPlan(value: WindowsVirtualMachinePlan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret"></a>

```typescript
public putSecret(value: IResolvable | WindowsVirtualMachineSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `putSourceImageReference` <a name="putSourceImageReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference"></a>

```typescript
public putSourceImageReference(value: WindowsVirtualMachineSourceImageReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `putTerminationNotification` <a name="putTerminationNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification"></a>

```typescript
public putTerminationNotification(value: WindowsVirtualMachineTerminationNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: WindowsVirtualMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `putWinrmListener` <a name="putWinrmListener" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener"></a>

```typescript
public putWinrmListener(value: IResolvable | WindowsVirtualMachineWinrmListener[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `resetAdditionalCapabilities` <a name="resetAdditionalCapabilities" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities"></a>

```typescript
public resetAdditionalCapabilities(): void
```

##### `resetAdditionalUnattendContent` <a name="resetAdditionalUnattendContent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent"></a>

```typescript
public resetAdditionalUnattendContent(): void
```

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetAllowExtensionOperations` <a name="resetAllowExtensionOperations" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations"></a>

```typescript
public resetAllowExtensionOperations(): void
```

##### `resetAutomaticUpdatesEnabled` <a name="resetAutomaticUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAutomaticUpdatesEnabled"></a>

```typescript
public resetAutomaticUpdatesEnabled(): void
```

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId"></a>

```typescript
public resetAvailabilitySetId(): void
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics"></a>

```typescript
public resetBootDiagnostics(): void
```

##### `resetBypassPlatformSafetyChecksOnUserScheduleEnabled` <a name="resetBypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```typescript
public resetBypassPlatformSafetyChecksOnUserScheduleEnabled(): void
```

##### `resetCapacityReservationGroupId` <a name="resetCapacityReservationGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId"></a>

```typescript
public resetCapacityReservationGroupId(): void
```

##### `resetComputerName` <a name="resetComputerName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName"></a>

```typescript
public resetComputerName(): void
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData"></a>

```typescript
public resetCustomData(): void
```

##### `resetDedicatedHostGroupId` <a name="resetDedicatedHostGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId"></a>

```typescript
public resetDedicatedHostGroupId(): void
```

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId"></a>

```typescript
public resetDedicatedHostId(): void
```

##### `resetDiskControllerType` <a name="resetDiskControllerType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType"></a>

```typescript
public resetDiskControllerType(): void
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone"></a>

```typescript
public resetEdgeZone(): void
```

##### `resetEnableAutomaticUpdates` <a name="resetEnableAutomaticUpdates" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates"></a>

```typescript
public resetEnableAutomaticUpdates(): void
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled"></a>

```typescript
public resetEncryptionAtHostEnabled(): void
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy"></a>

```typescript
public resetEvictionPolicy(): void
```

##### `resetExtensionsTimeBudget` <a name="resetExtensionsTimeBudget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget"></a>

```typescript
public resetExtensionsTimeBudget(): void
```

##### `resetGalleryApplication` <a name="resetGalleryApplication" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication"></a>

```typescript
public resetGalleryApplication(): void
```

##### `resetHotpatchingEnabled` <a name="resetHotpatchingEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled"></a>

```typescript
public resetHotpatchingEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetMaxBidPrice` <a name="resetMaxBidPrice" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice"></a>

```typescript
public resetMaxBidPrice(): void
```

##### `resetOsImageNotification` <a name="resetOsImageNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification"></a>

```typescript
public resetOsImageNotification(): void
```

##### `resetOsManagedDiskId` <a name="resetOsManagedDiskId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsManagedDiskId"></a>

```typescript
public resetOsManagedDiskId(): void
```

##### `resetPatchAssessmentMode` <a name="resetPatchAssessmentMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode"></a>

```typescript
public resetPatchAssessmentMode(): void
```

##### `resetPatchMode` <a name="resetPatchMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode"></a>

```typescript
public resetPatchMode(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetPlatformFaultDomain` <a name="resetPlatformFaultDomain" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain"></a>

```typescript
public resetPlatformFaultDomain(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent"></a>

```typescript
public resetProvisionVmAgent(): void
```

##### `resetProximityPlacementGroupId` <a name="resetProximityPlacementGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId"></a>

```typescript
public resetProximityPlacementGroupId(): void
```

##### `resetRebootSetting` <a name="resetRebootSetting" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting"></a>

```typescript
public resetRebootSetting(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetSecureBootEnabled` <a name="resetSecureBootEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled"></a>

```typescript
public resetSecureBootEnabled(): void
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId"></a>

```typescript
public resetSourceImageId(): void
```

##### `resetSourceImageReference` <a name="resetSourceImageReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference"></a>

```typescript
public resetSourceImageReference(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminationNotification` <a name="resetTerminationNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification"></a>

```typescript
public resetTerminationNotification(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVirtualMachineScaleSetId` <a name="resetVirtualMachineScaleSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId"></a>

```typescript
public resetVirtualMachineScaleSetId(): void
```

##### `resetVmAgentPlatformUpdatesEnabled` <a name="resetVmAgentPlatformUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled"></a>

```typescript
public resetVmAgentPlatformUpdatesEnabled(): void
```

##### `resetVtpmEnabled` <a name="resetVtpmEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled"></a>

```typescript
public resetVtpmEnabled(): void
```

##### `resetWinrmListener` <a name="resetWinrmListener" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener"></a>

```typescript
public resetWinrmListener(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WindowsVirtualMachine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

windowsVirtualMachine.WindowsVirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WindowsVirtualMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WindowsVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication">galleryApplication</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk">osDisk</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification">osImageNotification</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses">privateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses">publicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener">winrmListener</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput">additionalCapabilitiesInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput">additionalUnattendContentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput">allowExtensionOperationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabledInput">automaticUpdatesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput">bypassPlatformSafetyChecksOnUserScheduleEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput">capacityReservationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput">computerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput">customDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput">dedicatedHostGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput">diskControllerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput">edgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput">enableAutomaticUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput">extensionsTimeBudgetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput">galleryApplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput">hotpatchingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput">maxBidPriceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput">osImageNotificationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskIdInput">osManagedDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput">patchAssessmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput">patchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput">platformFaultDomainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput">proximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput">rebootSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput">secureBootEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput">sourceImageReferenceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput">terminationNotificationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput">vmAgentPlatformUpdatesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput">vtpmEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput">winrmListenerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabled">automaticUpdatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData">customData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType">diskControllerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone">edgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled">hotpatchingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice">maxBidPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskId">osManagedDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode">patchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain">platformFaultDomain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent">provisionVmAgent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting">rebootSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled">secureBootEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled">vmAgentPlatformUpdatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled">vtpmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalCapabilities`<sup>Required</sup> <a name="additionalCapabilities" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities"></a>

```typescript
public readonly additionalCapabilities: WindowsVirtualMachineAdditionalCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `additionalUnattendContent`<sup>Required</sup> <a name="additionalUnattendContent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent"></a>

```typescript
public readonly additionalUnattendContent: WindowsVirtualMachineAdditionalUnattendContentList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: WindowsVirtualMachineBootDiagnosticsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: WindowsVirtualMachineGalleryApplicationList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity"></a>

```typescript
public readonly identity: WindowsVirtualMachineIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk"></a>

```typescript
public readonly osDisk: WindowsVirtualMachineOsDiskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a>

---

##### `osImageNotification`<sup>Required</sup> <a name="osImageNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification"></a>

```typescript
public readonly osImageNotification: WindowsVirtualMachineOsImageNotificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan"></a>

```typescript
public readonly plan: WindowsVirtualMachinePlanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: string[];
```

- *Type:* string[]

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses"></a>

```typescript
public readonly publicIpAddresses: string[];
```

- *Type:* string[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret"></a>

```typescript
public readonly secret: WindowsVirtualMachineSecretList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a>

---

##### `sourceImageReference`<sup>Required</sup> <a name="sourceImageReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference"></a>

```typescript
public readonly sourceImageReference: WindowsVirtualMachineSourceImageReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `terminationNotification`<sup>Required</sup> <a name="terminationNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification"></a>

```typescript
public readonly terminationNotification: WindowsVirtualMachineTerminationNotificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsVirtualMachineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

##### `winrmListener`<sup>Required</sup> <a name="winrmListener" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener"></a>

```typescript
public readonly winrmListener: WindowsVirtualMachineWinrmListenerList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a>

---

##### `additionalCapabilitiesInput`<sup>Optional</sup> <a name="additionalCapabilitiesInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput"></a>

```typescript
public readonly additionalCapabilitiesInput: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `additionalUnattendContentInput`<sup>Optional</sup> <a name="additionalUnattendContentInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput"></a>

```typescript
public readonly additionalUnattendContentInput: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `allowExtensionOperationsInput`<sup>Optional</sup> <a name="allowExtensionOperationsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput"></a>

```typescript
public readonly allowExtensionOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `automaticUpdatesEnabledInput`<sup>Optional</sup> <a name="automaticUpdatesEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabledInput"></a>

```typescript
public readonly automaticUpdatesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput"></a>

```typescript
public readonly availabilitySetIdInput: string;
```

- *Type:* string

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput"></a>

```typescript
public readonly bootDiagnosticsInput: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabledInput`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput"></a>

```typescript
public readonly bypassPlatformSafetyChecksOnUserScheduleEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `capacityReservationGroupIdInput`<sup>Optional</sup> <a name="capacityReservationGroupIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput"></a>

```typescript
public readonly capacityReservationGroupIdInput: string;
```

- *Type:* string

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput"></a>

```typescript
public readonly computerNameInput: string;
```

- *Type:* string

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput"></a>

```typescript
public readonly customDataInput: string;
```

- *Type:* string

---

##### `dedicatedHostGroupIdInput`<sup>Optional</sup> <a name="dedicatedHostGroupIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput"></a>

```typescript
public readonly dedicatedHostGroupIdInput: string;
```

- *Type:* string

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput"></a>

```typescript
public readonly dedicatedHostIdInput: string;
```

- *Type:* string

---

##### `diskControllerTypeInput`<sup>Optional</sup> <a name="diskControllerTypeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput"></a>

```typescript
public readonly diskControllerTypeInput: string;
```

- *Type:* string

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput"></a>

```typescript
public readonly edgeZoneInput: string;
```

- *Type:* string

---

##### `enableAutomaticUpdatesInput`<sup>Optional</sup> <a name="enableAutomaticUpdatesInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput"></a>

```typescript
public readonly enableAutomaticUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```typescript
public readonly encryptionAtHostEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput"></a>

```typescript
public readonly evictionPolicyInput: string;
```

- *Type:* string

---

##### `extensionsTimeBudgetInput`<sup>Optional</sup> <a name="extensionsTimeBudgetInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput"></a>

```typescript
public readonly extensionsTimeBudgetInput: string;
```

- *Type:* string

---

##### `galleryApplicationInput`<sup>Optional</sup> <a name="galleryApplicationInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput"></a>

```typescript
public readonly galleryApplicationInput: IResolvable | WindowsVirtualMachineGalleryApplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---

##### `hotpatchingEnabledInput`<sup>Optional</sup> <a name="hotpatchingEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput"></a>

```typescript
public readonly hotpatchingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput"></a>

```typescript
public readonly identityInput: WindowsVirtualMachineIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxBidPriceInput`<sup>Optional</sup> <a name="maxBidPriceInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput"></a>

```typescript
public readonly maxBidPriceInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput"></a>

```typescript
public readonly networkInterfaceIdsInput: string[];
```

- *Type:* string[]

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput"></a>

```typescript
public readonly osDiskInput: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `osImageNotificationInput`<sup>Optional</sup> <a name="osImageNotificationInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput"></a>

```typescript
public readonly osImageNotificationInput: WindowsVirtualMachineOsImageNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `osManagedDiskIdInput`<sup>Optional</sup> <a name="osManagedDiskIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskIdInput"></a>

```typescript
public readonly osManagedDiskIdInput: string;
```

- *Type:* string

---

##### `patchAssessmentModeInput`<sup>Optional</sup> <a name="patchAssessmentModeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput"></a>

```typescript
public readonly patchAssessmentModeInput: string;
```

- *Type:* string

---

##### `patchModeInput`<sup>Optional</sup> <a name="patchModeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput"></a>

```typescript
public readonly patchModeInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput"></a>

```typescript
public readonly planInput: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `platformFaultDomainInput`<sup>Optional</sup> <a name="platformFaultDomainInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput"></a>

```typescript
public readonly platformFaultDomainInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput"></a>

```typescript
public readonly provisionVmAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proximityPlacementGroupIdInput`<sup>Optional</sup> <a name="proximityPlacementGroupIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput"></a>

```typescript
public readonly proximityPlacementGroupIdInput: string;
```

- *Type:* string

---

##### `rebootSettingInput`<sup>Optional</sup> <a name="rebootSettingInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput"></a>

```typescript
public readonly rebootSettingInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---

##### `secureBootEnabledInput`<sup>Optional</sup> <a name="secureBootEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput"></a>

```typescript
public readonly secureBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput"></a>

```typescript
public readonly sourceImageIdInput: string;
```

- *Type:* string

---

##### `sourceImageReferenceInput`<sup>Optional</sup> <a name="sourceImageReferenceInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput"></a>

```typescript
public readonly sourceImageReferenceInput: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `terminationNotificationInput`<sup>Optional</sup> <a name="terminationNotificationInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput"></a>

```typescript
public readonly terminationNotificationInput: WindowsVirtualMachineTerminationNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WindowsVirtualMachineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```typescript
public readonly virtualMachineScaleSetIdInput: string;
```

- *Type:* string

---

##### `vmAgentPlatformUpdatesEnabledInput`<sup>Optional</sup> <a name="vmAgentPlatformUpdatesEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput"></a>

```typescript
public readonly vmAgentPlatformUpdatesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vtpmEnabledInput`<sup>Optional</sup> <a name="vtpmEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput"></a>

```typescript
public readonly vtpmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `winrmListenerInput`<sup>Optional</sup> <a name="winrmListenerInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput"></a>

```typescript
public readonly winrmListenerInput: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `allowExtensionOperations`<sup>Required</sup> <a name="allowExtensionOperations" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations"></a>

```typescript
public readonly allowExtensionOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `automaticUpdatesEnabled`<sup>Required</sup> <a name="automaticUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.automaticUpdatesEnabled"></a>

```typescript
public readonly automaticUpdatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId"></a>

```typescript
public readonly availabilitySetId: string;
```

- *Type:* string

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Required</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```typescript
public readonly bypassPlatformSafetyChecksOnUserScheduleEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `capacityReservationGroupId`<sup>Required</sup> <a name="capacityReservationGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId"></a>

```typescript
public readonly capacityReservationGroupId: string;
```

- *Type:* string

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

---

##### `dedicatedHostGroupId`<sup>Required</sup> <a name="dedicatedHostGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId"></a>

```typescript
public readonly dedicatedHostGroupId: string;
```

- *Type:* string

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

---

##### `diskControllerType`<sup>Required</sup> <a name="diskControllerType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType"></a>

```typescript
public readonly diskControllerType: string;
```

- *Type:* string

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

---

##### `enableAutomaticUpdates`<sup>Required</sup> <a name="enableAutomaticUpdates" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `extensionsTimeBudget`<sup>Required</sup> <a name="extensionsTimeBudget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget"></a>

```typescript
public readonly extensionsTimeBudget: string;
```

- *Type:* string

---

##### `hotpatchingEnabled`<sup>Required</sup> <a name="hotpatchingEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled"></a>

```typescript
public readonly hotpatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxBidPrice`<sup>Required</sup> <a name="maxBidPrice" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice"></a>

```typescript
public readonly maxBidPrice: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `osManagedDiskId`<sup>Required</sup> <a name="osManagedDiskId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osManagedDiskId"></a>

```typescript
public readonly osManagedDiskId: string;
```

- *Type:* string

---

##### `patchAssessmentMode`<sup>Required</sup> <a name="patchAssessmentMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode"></a>

```typescript
public readonly patchAssessmentMode: string;
```

- *Type:* string

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

---

##### `platformFaultDomain`<sup>Required</sup> <a name="platformFaultDomain" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain"></a>

```typescript
public readonly platformFaultDomain: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent"></a>

```typescript
public readonly provisionVmAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId"></a>

```typescript
public readonly proximityPlacementGroupId: string;
```

- *Type:* string

---

##### `rebootSetting`<sup>Required</sup> <a name="rebootSetting" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting"></a>

```typescript
public readonly rebootSetting: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `secureBootEnabled`<sup>Required</sup> <a name="secureBootEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled"></a>

```typescript
public readonly secureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

---

##### `vmAgentPlatformUpdatesEnabled`<sup>Required</sup> <a name="vmAgentPlatformUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled"></a>

```typescript
public readonly vmAgentPlatformUpdatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vtpmEnabled`<sup>Required</sup> <a name="vtpmEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled"></a>

```typescript
public readonly vtpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineAdditionalCapabilities <a name="WindowsVirtualMachineAdditionalCapabilities" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineAdditionalCapabilities: windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled">hibernationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}. |

---

##### `hibernationEnabled`<sup>Optional</sup> <a name="hibernationEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled"></a>

```typescript
public readonly hibernationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}.

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```typescript
public readonly ultraSsdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

### WindowsVirtualMachineAdditionalUnattendContent <a name="WindowsVirtualMachineAdditionalUnattendContent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineAdditionalUnattendContent: windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting">setting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}.

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}.

---

### WindowsVirtualMachineBootDiagnostics <a name="WindowsVirtualMachineBootDiagnostics" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineBootDiagnostics: windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri">storageAccountUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}. |

---

##### `storageAccountUri`<sup>Optional</sup> <a name="storageAccountUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```typescript
public readonly storageAccountUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

### WindowsVirtualMachineConfig <a name="WindowsVirtualMachineConfig" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineConfig: windowsVirtualMachine.WindowsVirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | additional_unattend_content block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.automaticUpdatesEnabled">automaticUpdatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#automatic_updates_enabled WindowsVirtualMachine#automatic_updates_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName">computerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData">customData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType">diskControllerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone">edgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication">galleryApplication</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | gallery_application block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled">hotpatchingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice">maxBidPrice</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification">osImageNotification</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | os_image_notification block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osManagedDiskId">osManagedDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#os_managed_disk_id WindowsVirtualMachine#os_managed_disk_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode">patchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain">platformFaultDomain</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority">priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting">rebootSetting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret">secret</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled">secureBootEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled">vmAgentPlatformUpdatesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled">vtpmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener">winrmListener</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | winrm_listener block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk"></a>

```typescript
public readonly osDisk: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities"></a>

```typescript
public readonly additionalCapabilities: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additionalUnattendContent`<sup>Optional</sup> <a name="additionalUnattendContent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent"></a>

```typescript
public readonly additionalUnattendContent: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations"></a>

```typescript
public readonly allowExtensionOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `automaticUpdatesEnabled`<sup>Optional</sup> <a name="automaticUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.automaticUpdatesEnabled"></a>

```typescript
public readonly automaticUpdatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#automatic_updates_enabled WindowsVirtualMachine#automatic_updates_enabled}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId"></a>

```typescript
public readonly availabilitySetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics"></a>

```typescript
public readonly bootDiagnostics: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```typescript
public readonly bypassPlatformSafetyChecksOnUserScheduleEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId"></a>

```typescript
public readonly capacityReservationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}.

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `dedicatedHostGroupId`<sup>Optional</sup> <a name="dedicatedHostGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId"></a>

```typescript
public readonly dedicatedHostGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}.

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}.

---

##### `diskControllerType`<sup>Optional</sup> <a name="diskControllerType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType"></a>

```typescript
public readonly diskControllerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}.

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates"></a>

```typescript
public readonly enableAutomaticUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```typescript
public readonly encryptionAtHostEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget"></a>

```typescript
public readonly extensionsTimeBudget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication"></a>

```typescript
public readonly galleryApplication: IResolvable | WindowsVirtualMachineGalleryApplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#gallery_application WindowsVirtualMachine#gallery_application}

---

##### `hotpatchingEnabled`<sup>Optional</sup> <a name="hotpatchingEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled"></a>

```typescript
public readonly hotpatchingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity"></a>

```typescript
public readonly identity: WindowsVirtualMachineIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#identity WindowsVirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice"></a>

```typescript
public readonly maxBidPrice: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `osImageNotification`<sup>Optional</sup> <a name="osImageNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification"></a>

```typescript
public readonly osImageNotification: WindowsVirtualMachineOsImageNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

os_image_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#os_image_notification WindowsVirtualMachine#os_image_notification}

---

##### `osManagedDiskId`<sup>Optional</sup> <a name="osManagedDiskId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osManagedDiskId"></a>

```typescript
public readonly osManagedDiskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#os_managed_disk_id WindowsVirtualMachine#os_managed_disk_id}.

---

##### `patchAssessmentMode`<sup>Optional</sup> <a name="patchAssessmentMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode"></a>

```typescript
public readonly patchAssessmentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan"></a>

```typescript
public readonly plan: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `platformFaultDomain`<sup>Optional</sup> <a name="platformFaultDomain" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain"></a>

```typescript
public readonly platformFaultDomain: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent"></a>

```typescript
public readonly provisionVmAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId"></a>

```typescript
public readonly proximityPlacementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}.

---

##### `rebootSetting`<sup>Optional</sup> <a name="rebootSetting" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting"></a>

```typescript
public readonly rebootSetting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `secureBootEnabled`<sup>Optional</sup> <a name="secureBootEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled"></a>

```typescript
public readonly secureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference"></a>

```typescript
public readonly sourceImageReference: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `terminationNotification`<sup>Optional</sup> <a name="terminationNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification"></a>

```typescript
public readonly terminationNotification: WindowsVirtualMachineTerminationNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#termination_notification WindowsVirtualMachine#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WindowsVirtualMachineTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```typescript
public readonly virtualMachineScaleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `vmAgentPlatformUpdatesEnabled`<sup>Optional</sup> <a name="vmAgentPlatformUpdatesEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled"></a>

```typescript
public readonly vmAgentPlatformUpdatesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}.

---

##### `vtpmEnabled`<sup>Optional</sup> <a name="vtpmEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled"></a>

```typescript
public readonly vtpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}.

---

##### `winrmListener`<sup>Optional</sup> <a name="winrmListener" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener"></a>

```typescript
public readonly winrmListener: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

### WindowsVirtualMachineGalleryApplication <a name="WindowsVirtualMachineGalleryApplication" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineGalleryApplication: windowsVirtualMachine.WindowsVirtualMachineGalleryApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri">configurationBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled">treatFailureAsDeploymentFailureEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}. |

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}.

---

##### `configurationBlobUri`<sup>Optional</sup> <a name="configurationBlobUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri"></a>

```typescript
public readonly configurationBlobUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}.

---

##### `treatFailureAsDeploymentFailureEnabled`<sup>Optional</sup> <a name="treatFailureAsDeploymentFailureEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled"></a>

```typescript
public readonly treatFailureAsDeploymentFailureEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}.

---

### WindowsVirtualMachineIdentity <a name="WindowsVirtualMachineIdentity" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineIdentity: windowsVirtualMachine.WindowsVirtualMachineIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}.

---

### WindowsVirtualMachineOsDisk <a name="WindowsVirtualMachineOsDisk" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineOsDisk: windowsVirtualMachine.WindowsVirtualMachineOsDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching">caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType">securityEncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

##### `diffDiskSettings`<sup>Optional</sup> <a name="diffDiskSettings" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings"></a>

```typescript
public readonly diffDiskSettings: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `secureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId"></a>

```typescript
public readonly secureVmDiskEncryptionSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}.

---

##### `securityEncryptionType`<sup>Optional</sup> <a name="securityEncryptionType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType"></a>

```typescript
public readonly securityEncryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

### WindowsVirtualMachineOsDiskDiffDiskSettings <a name="WindowsVirtualMachineOsDiskDiffDiskSettings" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineOsDiskDiffDiskSettings: windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement">placement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement"></a>

```typescript
public readonly placement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}.

---

### WindowsVirtualMachineOsImageNotification <a name="WindowsVirtualMachineOsImageNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineOsImageNotification: windowsVirtualMachine.WindowsVirtualMachineOsImageNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout">timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachinePlan <a name="WindowsVirtualMachinePlan" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachinePlan: windowsVirtualMachine.WindowsVirtualMachinePlan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

### WindowsVirtualMachineSecret <a name="WindowsVirtualMachineSecret" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineSecret: windowsVirtualMachine.WindowsVirtualMachineSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate">certificate</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#certificate WindowsVirtualMachine#certificate}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}.

---

### WindowsVirtualMachineSecretCertificate <a name="WindowsVirtualMachineSecretCertificate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineSecretCertificate: windowsVirtualMachine.WindowsVirtualMachineSecretCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store">store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}. |

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}.

---

### WindowsVirtualMachineSourceImageReference <a name="WindowsVirtualMachineSourceImageReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineSourceImageReference: windowsVirtualMachine.WindowsVirtualMachineSourceImageReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

### WindowsVirtualMachineTerminationNotification <a name="WindowsVirtualMachineTerminationNotification" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineTerminationNotification: windowsVirtualMachine.WindowsVirtualMachineTerminationNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout">timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachineTimeouts <a name="WindowsVirtualMachineTimeouts" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineTimeouts: windowsVirtualMachine.WindowsVirtualMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

### WindowsVirtualMachineWinrmListener <a name="WindowsVirtualMachineWinrmListener" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

const windowsVirtualMachineWinrmListener: windowsVirtualMachine.WindowsVirtualMachineWinrmListener = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl">certificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}.

---

##### `certificateUrl`<sup>Optional</sup> <a name="certificateUrl" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled">resetHibernationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHibernationEnabled` <a name="resetHibernationEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled"></a>

```typescript
public resetHibernationEnabled(): void
```

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```typescript
public resetUltraSsdEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput">hibernationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled">hibernationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hibernationEnabledInput`<sup>Optional</sup> <a name="hibernationEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput"></a>

```typescript
public readonly hibernationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```typescript
public readonly ultraSsdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hibernationEnabled`<sup>Required</sup> <a name="hibernationEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled"></a>

```typescript
public readonly hibernationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```typescript
public readonly ultraSsdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineAdditionalCapabilities;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---


### WindowsVirtualMachineAdditionalUnattendContentList <a name="WindowsVirtualMachineAdditionalUnattendContentList" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineAdditionalUnattendContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineAdditionalUnattendContent[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>[]

---


### WindowsVirtualMachineAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineAdditionalUnattendContentOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput">settingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting">setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput"></a>

```typescript
public readonly settingInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineAdditionalUnattendContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>

---


### WindowsVirtualMachineBootDiagnosticsOutputReference <a name="WindowsVirtualMachineBootDiagnosticsOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri">resetStorageAccountUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageAccountUri` <a name="resetStorageAccountUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```typescript
public resetStorageAccountUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storageAccountUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storageAccountUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageAccountUriInput`<sup>Optional</sup> <a name="storageAccountUriInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```typescript
public readonly storageAccountUriInput: string;
```

- *Type:* string

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```typescript
public readonly storageAccountUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineBootDiagnostics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---


### WindowsVirtualMachineGalleryApplicationList <a name="WindowsVirtualMachineGalleryApplicationList" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineGalleryApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineGalleryApplication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>[]

---


### WindowsVirtualMachineGalleryApplicationOutputReference <a name="WindowsVirtualMachineGalleryApplicationOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri">resetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled">resetTreatFailureAsDeploymentFailureEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled"></a>

```typescript
public resetAutomaticUpgradeEnabled(): void
```

##### `resetConfigurationBlobUri` <a name="resetConfigurationBlobUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```typescript
public resetConfigurationBlobUri(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTreatFailureAsDeploymentFailureEnabled` <a name="resetTreatFailureAsDeploymentFailureEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled"></a>

```typescript
public resetTreatFailureAsDeploymentFailureEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput">configurationBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput">treatFailureAsDeploymentFailureEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri">configurationBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled">treatFailureAsDeploymentFailureEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput"></a>

```typescript
public readonly automaticUpgradeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configurationBlobUriInput`<sup>Optional</sup> <a name="configurationBlobUriInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```typescript
public readonly configurationBlobUriInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `treatFailureAsDeploymentFailureEnabledInput`<sup>Optional</sup> <a name="treatFailureAsDeploymentFailureEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput"></a>

```typescript
public readonly treatFailureAsDeploymentFailureEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled"></a>

```typescript
public readonly automaticUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configurationBlobUri`<sup>Required</sup> <a name="configurationBlobUri" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```typescript
public readonly configurationBlobUri: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `treatFailureAsDeploymentFailureEnabled`<sup>Required</sup> <a name="treatFailureAsDeploymentFailureEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled"></a>

```typescript
public readonly treatFailureAsDeploymentFailureEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineGalleryApplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>

---


### WindowsVirtualMachineIdentityOutputReference <a name="WindowsVirtualMachineIdentityOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---


### WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlacement` <a name="resetPlacement" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```typescript
public resetPlacement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput">placementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement">placement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```typescript
public readonly placementInput: string;
```

- *Type:* string

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```typescript
public readonly placement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineOsDiskOutputReference <a name="WindowsVirtualMachineOsDiskOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings">putDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">resetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">resetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType">resetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiffDiskSettings` <a name="putDiffDiskSettings" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```typescript
public putDiffDiskSettings(value: WindowsVirtualMachineOsDiskDiffDiskSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `resetDiffDiskSettings` <a name="resetDiffDiskSettings" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```typescript
public resetDiffDiskSettings(): void
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```typescript
public resetDiskEncryptionSetId(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecureVmDiskEncryptionSetId` <a name="resetSecureVmDiskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```typescript
public resetSecureVmDiskEncryptionSetId(): void
```

##### `resetSecurityEncryptionType` <a name="resetSecurityEncryptionType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType"></a>

```typescript
public resetSecurityEncryptionType(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```typescript
public resetWriteAcceleratorEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diffDiskSettingsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">secureVmDiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput">securityEncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType">securityEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffDiskSettings`<sup>Required</sup> <a name="diffDiskSettings" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```typescript
public readonly diffDiskSettings: WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: string;
```

- *Type:* string

---

##### `diffDiskSettingsInput`<sup>Optional</sup> <a name="diffDiskSettingsInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```typescript
public readonly diffDiskSettingsInput: WindowsVirtualMachineOsDiskDiffDiskSettings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```typescript
public readonly diskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```typescript
public readonly secureVmDiskEncryptionSetIdInput: string;
```

- *Type:* string

---

##### `securityEncryptionTypeInput`<sup>Optional</sup> <a name="securityEncryptionTypeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```typescript
public readonly securityEncryptionTypeInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```typescript
public readonly writeAcceleratorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secureVmDiskEncryptionSetId`<sup>Required</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```typescript
public readonly secureVmDiskEncryptionSetId: string;
```

- *Type:* string

---

##### `securityEncryptionType`<sup>Required</sup> <a name="securityEncryptionType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType"></a>

```typescript
public readonly securityEncryptionType: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineOsDisk;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---


### WindowsVirtualMachineOsImageNotificationOutputReference <a name="WindowsVirtualMachineOsImageNotificationOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineOsImageNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---


### WindowsVirtualMachinePlanOutputReference <a name="WindowsVirtualMachinePlanOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachinePlan;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---


### WindowsVirtualMachineSecretCertificateList <a name="WindowsVirtualMachineSecretCertificateList" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


### WindowsVirtualMachineSecretCertificateOutputReference <a name="WindowsVirtualMachineSecretCertificateOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput">storeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store">store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storeInput`<sup>Optional</sup> <a name="storeInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput"></a>

```typescript
public readonly storeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecretCertificate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>

---


### WindowsVirtualMachineSecretList <a name="WindowsVirtualMachineSecretList" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>[]

---


### WindowsVirtualMachineSecretOutputReference <a name="WindowsVirtualMachineSecretOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | WindowsVirtualMachineSecretCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate"></a>

```typescript
public readonly certificate: WindowsVirtualMachineSecretCertificateList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | WindowsVirtualMachineSecretCertificate[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>[]

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>

---


### WindowsVirtualMachineSourceImageReferenceOutputReference <a name="WindowsVirtualMachineSourceImageReferenceOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineSourceImageReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---


### WindowsVirtualMachineTerminationNotificationOutputReference <a name="WindowsVirtualMachineTerminationNotificationOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WindowsVirtualMachineTerminationNotification;
```

- *Type:* <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---


### WindowsVirtualMachineTimeoutsOutputReference <a name="WindowsVirtualMachineTimeoutsOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---


### WindowsVirtualMachineWinrmListenerList <a name="WindowsVirtualMachineWinrmListenerList" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get"></a>

```typescript
public get(index: number): WindowsVirtualMachineWinrmListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineWinrmListener[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>[]

---


### WindowsVirtualMachineWinrmListenerOutputReference <a name="WindowsVirtualMachineWinrmListenerOutputReference" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer"></a>

```typescript
import { windowsVirtualMachine } from '@cdktn/provider-azurerm'

new windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl">resetCertificateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateUrl` <a name="resetCertificateUrl" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl"></a>

```typescript
public resetCertificateUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput">certificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl">certificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateUrlInput`<sup>Optional</sup> <a name="certificateUrlInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput"></a>

```typescript
public readonly certificateUrlInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl"></a>

```typescript
public readonly certificateUrl: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WindowsVirtualMachineWinrmListener;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>

---



