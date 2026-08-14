# `backupPolicyFileShare` Submodule <a name="`backupPolicyFileShare` Submodule" id="@cdktn/provider-azurerm.backupPolicyFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyFileShare <a name="BackupPolicyFileShare" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share azurerm_backup_policy_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShare(scope: Construct, id: string, config: BackupPolicyFileShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily">putRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly">putRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly">putRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly">putRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetBackupTier">resetBackupTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly">resetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly">resetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly">resetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetSnapshotRetentionInDays">resetSnapshotRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackup` <a name="putBackup" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup"></a>

```typescript
public putBackup(value: BackupPolicyFileShareBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `putRetentionDaily` <a name="putRetentionDaily" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily"></a>

```typescript
public putRetentionDaily(value: BackupPolicyFileShareRetentionDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `putRetentionMonthly` <a name="putRetentionMonthly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly"></a>

```typescript
public putRetentionMonthly(value: BackupPolicyFileShareRetentionMonthly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `putRetentionWeekly` <a name="putRetentionWeekly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly"></a>

```typescript
public putRetentionWeekly(value: BackupPolicyFileShareRetentionWeekly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `putRetentionYearly` <a name="putRetentionYearly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly"></a>

```typescript
public putRetentionYearly(value: BackupPolicyFileShareRetentionYearly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupPolicyFileShareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

---

##### `resetBackupTier` <a name="resetBackupTier" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetBackupTier"></a>

```typescript
public resetBackupTier(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionMonthly` <a name="resetRetentionMonthly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly"></a>

```typescript
public resetRetentionMonthly(): void
```

##### `resetRetentionWeekly` <a name="resetRetentionWeekly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly"></a>

```typescript
public resetRetentionWeekly(): void
```

##### `resetRetentionYearly` <a name="resetRetentionYearly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly"></a>

```typescript
public resetRetentionYearly(): void
```

##### `resetSnapshotRetentionInDays` <a name="resetSnapshotRetentionInDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetSnapshotRetentionInDays"></a>

```typescript
public resetSnapshotRetentionInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupPolicyFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

backupPolicyFileShare.BackupPolicyFileShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupPolicyFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupPolicyFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup">backup</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput">backupInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupTierInput">backupTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput">retentionDailyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput">retentionMonthlyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput">retentionWeeklyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput">retentionYearlyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.snapshotRetentionInDaysInput">snapshotRetentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupTier">backupTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.snapshotRetentionInDays">snapshotRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup"></a>

```typescript
public readonly backup: BackupPolicyFileShareBackupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a>

---

##### `retentionDaily`<sup>Required</sup> <a name="retentionDaily" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyFileShareRetentionDailyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a>

---

##### `retentionMonthly`<sup>Required</sup> <a name="retentionMonthly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyFileShareRetentionMonthlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a>

---

##### `retentionWeekly`<sup>Required</sup> <a name="retentionWeekly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyFileShareRetentionWeeklyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a>

---

##### `retentionYearly`<sup>Required</sup> <a name="retentionYearly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyFileShareRetentionYearlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyFileShareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput"></a>

```typescript
public readonly backupInput: BackupPolicyFileShareBackup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `backupTierInput`<sup>Optional</sup> <a name="backupTierInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupTierInput"></a>

```typescript
public readonly backupTierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retentionDailyInput`<sup>Optional</sup> <a name="retentionDailyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput"></a>

```typescript
public readonly retentionDailyInput: BackupPolicyFileShareRetentionDaily;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `retentionMonthlyInput`<sup>Optional</sup> <a name="retentionMonthlyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput"></a>

```typescript
public readonly retentionMonthlyInput: BackupPolicyFileShareRetentionMonthly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `retentionWeeklyInput`<sup>Optional</sup> <a name="retentionWeeklyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput"></a>

```typescript
public readonly retentionWeeklyInput: BackupPolicyFileShareRetentionWeekly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `retentionYearlyInput`<sup>Optional</sup> <a name="retentionYearlyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput"></a>

```typescript
public readonly retentionYearlyInput: BackupPolicyFileShareRetentionYearly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `snapshotRetentionInDaysInput`<sup>Optional</sup> <a name="snapshotRetentionInDaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.snapshotRetentionInDaysInput"></a>

```typescript
public readonly snapshotRetentionInDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupPolicyFileShareTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `backupTier`<sup>Required</sup> <a name="backupTier" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupTier"></a>

```typescript
public readonly backupTier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `snapshotRetentionInDays`<sup>Required</sup> <a name="snapshotRetentionInDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.snapshotRetentionInDays"></a>

```typescript
public readonly snapshotRetentionInDays: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyFileShareBackup <a name="BackupPolicyFileShareBackup" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareBackup: backupPolicyFileShare.BackupPolicyFileShareBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly">hourly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | hourly block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}.

---

##### `hourly`<sup>Optional</sup> <a name="hourly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly"></a>

```typescript
public readonly hourly: BackupPolicyFileShareBackupHourly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#hourly BackupPolicyFileShare#hourly}

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}.

---

### BackupPolicyFileShareBackupHourly <a name="BackupPolicyFileShareBackupHourly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareBackupHourly: backupPolicyFileShare.BackupPolicyFileShareBackupHourly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration">windowDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}.

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration"></a>

```typescript
public readonly windowDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}.

---

### BackupPolicyFileShareConfig <a name="BackupPolicyFileShareConfig" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareConfig: backupPolicyFileShare.BackupPolicyFileShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup">backup</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | backup block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backupTier">backupTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#backup_tier BackupPolicyFileShare#backup_tier}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.snapshotRetentionInDays">snapshotRetentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#snapshot_retention_in_days BackupPolicyFileShare#snapshot_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup"></a>

```typescript
public readonly backup: BackupPolicyFileShareBackup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#backup BackupPolicyFileShare#backup}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}.

---

##### `retentionDaily`<sup>Required</sup> <a name="retentionDaily" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyFileShareRetentionDaily;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#retention_daily BackupPolicyFileShare#retention_daily}

---

##### `backupTier`<sup>Optional</sup> <a name="backupTier" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backupTier"></a>

```typescript
public readonly backupTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#backup_tier BackupPolicyFileShare#backup_tier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionMonthly`<sup>Optional</sup> <a name="retentionMonthly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyFileShareRetentionMonthly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#retention_monthly BackupPolicyFileShare#retention_monthly}

---

##### `retentionWeekly`<sup>Optional</sup> <a name="retentionWeekly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyFileShareRetentionWeekly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#retention_weekly BackupPolicyFileShare#retention_weekly}

---

##### `retentionYearly`<sup>Optional</sup> <a name="retentionYearly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyFileShareRetentionYearly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#retention_yearly BackupPolicyFileShare#retention_yearly}

---

##### `snapshotRetentionInDays`<sup>Optional</sup> <a name="snapshotRetentionInDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.snapshotRetentionInDays"></a>

```typescript
public readonly snapshotRetentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#snapshot_retention_in_days BackupPolicyFileShare#snapshot_retention_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyFileShareTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#timeouts BackupPolicyFileShare#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}.

---

### BackupPolicyFileShareRetentionDaily <a name="BackupPolicyFileShareRetentionDaily" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareRetentionDaily: backupPolicyFileShare.BackupPolicyFileShareRetentionDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

### BackupPolicyFileShareRetentionMonthly <a name="BackupPolicyFileShareRetentionMonthly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareRetentionMonthly: backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days">days</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `includeLastDays`<sup>Optional</sup> <a name="includeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareRetentionWeekly <a name="BackupPolicyFileShareRetentionWeekly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareRetentionWeekly: backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

### BackupPolicyFileShareRetentionYearly <a name="BackupPolicyFileShareRetentionYearly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareRetentionYearly: backupPolicyFileShare.BackupPolicyFileShareRetentionYearly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months">months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days">days</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `includeLastDays`<sup>Optional</sup> <a name="includeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareTimeouts <a name="BackupPolicyFileShareTimeouts" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

const backupPolicyFileShareTimeouts: backupPolicyFileShare.BackupPolicyFileShareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyFileShareBackupHourlyOutputReference <a name="BackupPolicyFileShareBackupHourlyOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput">windowDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration">windowDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `windowDurationInput`<sup>Optional</sup> <a name="windowDurationInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput"></a>

```typescript
public readonly windowDurationInput: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `windowDuration`<sup>Required</sup> <a name="windowDuration" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration"></a>

```typescript
public readonly windowDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareBackupHourly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---


### BackupPolicyFileShareBackupOutputReference <a name="BackupPolicyFileShareBackupOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly">putHourly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly">resetHourly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime">resetTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHourly` <a name="putHourly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly"></a>

```typescript
public putHourly(value: BackupPolicyFileShareBackupHourly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `resetHourly` <a name="resetHourly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly"></a>

```typescript
public resetHourly(): void
```

##### `resetTime` <a name="resetTime" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime"></a>

```typescript
public resetTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly">hourly</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput">hourlyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourly`<sup>Required</sup> <a name="hourly" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly"></a>

```typescript
public readonly hourly: BackupPolicyFileShareBackupHourlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `hourlyInput`<sup>Optional</sup> <a name="hourlyInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput"></a>

```typescript
public readonly hourlyInput: BackupPolicyFileShareBackupHourly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareBackup;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---


### BackupPolicyFileShareRetentionDailyOutputReference <a name="BackupPolicyFileShareRetentionDailyOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareRetentionDaily;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---


### BackupPolicyFileShareRetentionMonthlyOutputReference <a name="BackupPolicyFileShareRetentionMonthlyOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays">resetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetIncludeLastDays` <a name="resetIncludeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```typescript
public resetIncludeLastDays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput">daysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput">includeLastDaysInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number[];
```

- *Type:* number[]

---

##### `includeLastDaysInput`<sup>Optional</sup> <a name="includeLastDaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```typescript
public readonly includeLastDaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `includeLastDays`<sup>Required</sup> <a name="includeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareRetentionMonthly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---


### BackupPolicyFileShareRetentionWeeklyOutputReference <a name="BackupPolicyFileShareRetentionWeeklyOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareRetentionWeekly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---


### BackupPolicyFileShareRetentionYearlyOutputReference <a name="BackupPolicyFileShareRetentionYearlyOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays">resetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetIncludeLastDays` <a name="resetIncludeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```typescript
public resetIncludeLastDays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput">daysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput">includeLastDaysInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays">includeLastDays</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number[];
```

- *Type:* number[]

---

##### `includeLastDaysInput`<sup>Optional</sup> <a name="includeLastDaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```typescript
public readonly includeLastDaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `includeLastDays`<sup>Required</sup> <a name="includeLastDays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays"></a>

```typescript
public readonly includeLastDays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyFileShareRetentionYearly;
```

- *Type:* <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---


### BackupPolicyFileShareTimeoutsOutputReference <a name="BackupPolicyFileShareTimeoutsOutputReference" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupPolicyFileShare } from '@cdktn/provider-azurerm'

new backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPolicyFileShareTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

---



