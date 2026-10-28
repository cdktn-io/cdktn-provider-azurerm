# `dataProtectionBackupPolicyCosmosdbAccount` Submodule <a name="`dataProtectionBackupPolicyCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyCosmosdbAccount <a name="DataProtectionBackupPolicyCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

new dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount(scope: Construct, id: string, config: DataProtectionBackupPolicyCosmosdbAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule">putMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule">putWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule">putYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency">resetBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule">resetMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule">resetWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule">resetYearlyRetentionRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonthlyRetentionRule` <a name="putMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule"></a>

```typescript
public putMonthlyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupPolicyCosmosdbAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `putWeeklyRetentionRule` <a name="putWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule"></a>

```typescript
public putWeeklyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `putYearlyRetentionRule` <a name="putYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule"></a>

```typescript
public putYearlyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `resetBackupFrequency` <a name="resetBackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency"></a>

```typescript
public resetBackupFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonthlyRetentionRule` <a name="resetMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule"></a>

```typescript
public resetMonthlyRetentionRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyRetentionRule` <a name="resetWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule"></a>

```typescript
public resetWeeklyRetentionRule(): void
```

##### `resetYearlyRetentionRule` <a name="resetYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule"></a>

```typescript
public resetYearlyRetentionRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules">incrementalBackupSchedules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule">monthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule">weeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule">yearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput">backupFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput">backupScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput">dataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput">defaultRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput">monthlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput">weeklyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput">yearlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency">backupFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule">backupSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `incrementalBackupSchedules`<sup>Required</sup> <a name="incrementalBackupSchedules" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules"></a>

```typescript
public readonly incrementalBackupSchedules: string[];
```

- *Type:* string[]

---

##### `monthlyRetentionRule`<sup>Required</sup> <a name="monthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule"></a>

```typescript
public readonly monthlyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a>

---

##### `weeklyRetentionRule`<sup>Required</sup> <a name="weeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule"></a>

```typescript
public readonly weeklyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a>

---

##### `yearlyRetentionRule`<sup>Required</sup> <a name="yearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule"></a>

```typescript
public readonly yearlyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a>

---

##### `backupFrequencyInput`<sup>Optional</sup> <a name="backupFrequencyInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput"></a>

```typescript
public readonly backupFrequencyInput: string;
```

- *Type:* string

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput"></a>

```typescript
public readonly backupScheduleInput: string;
```

- *Type:* string

---

##### `dataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="dataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```typescript
public readonly dataProtectionBackupVaultIdInput: string;
```

- *Type:* string

---

##### `defaultRetentionDurationInput`<sup>Optional</sup> <a name="defaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput"></a>

```typescript
public readonly defaultRetentionDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monthlyRetentionRuleInput`<sup>Optional</sup> <a name="monthlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput"></a>

```typescript
public readonly monthlyRetentionRuleInput: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupPolicyCosmosdbAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `weeklyRetentionRuleInput`<sup>Optional</sup> <a name="weeklyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput"></a>

```typescript
public readonly weeklyRetentionRuleInput: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `yearlyRetentionRuleInput`<sup>Optional</sup> <a name="yearlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput"></a>

```typescript
public readonly yearlyRetentionRuleInput: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `backupFrequency`<sup>Required</sup> <a name="backupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency"></a>

```typescript
public readonly backupFrequency: string;
```

- *Type:* string

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule"></a>

```typescript
public readonly backupSchedule: string;
```

- *Type:* string

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```typescript
public readonly dataProtectionBackupVaultId: string;
```

- *Type:* string

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration"></a>

```typescript
public readonly defaultRetentionDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyCosmosdbAccountConfig <a name="DataProtectionBackupPolicyCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

const dataProtectionBackupPolicyCosmosdbAccountConfig: dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule">backupSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration">defaultRetentionDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency">backupFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule">monthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | monthly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule">weeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | weekly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule">yearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | yearly_retention_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule"></a>

```typescript
public readonly backupSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}.

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```typescript
public readonly dataProtectionBackupVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `defaultRetentionDuration`<sup>Required</sup> <a name="defaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration"></a>

```typescript
public readonly defaultRetentionDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}.

---

##### `backupFrequency`<sup>Optional</sup> <a name="backupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency"></a>

```typescript
public readonly backupFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthlyRetentionRule`<sup>Optional</sup> <a name="monthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule"></a>

```typescript
public readonly monthlyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

monthly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyCosmosdbAccountTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}

---

##### `weeklyRetentionRule`<sup>Optional</sup> <a name="weeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule"></a>

```typescript
public readonly weeklyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

weekly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}

---

##### `yearlyRetentionRule`<sup>Optional</sup> <a name="yearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule"></a>

```typescript
public readonly yearlyRetentionRule: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

yearly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}

---

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

const dataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule: dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

### DataProtectionBackupPolicyCosmosdbAccountTimeouts <a name="DataProtectionBackupPolicyCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

const dataProtectionBackupPolicyCosmosdbAccountTimeouts: dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}.

---

### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

const dataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule: dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

const dataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule: dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

new dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: string[];
```

- *Type:* string[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

new dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyCosmosdbAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---


### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

new dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyCosmosdbAccount } from '@cdktn/provider-azurerm'

new dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear"></a>

```typescript
public resetMonthsOfYear(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```typescript
public readonly monthsOfYearInput: string[];
```

- *Type:* string[]

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: string[];
```

- *Type:* string[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---



