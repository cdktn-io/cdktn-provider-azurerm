# `horizondbCluster` Submodule <a name="`horizondbCluster` Submodule" id="@cdktn/provider-azurerm.horizondbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizondbCluster <a name="HorizondbCluster" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbCluster(scope: Construct, id: string, config: HorizondbClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig">HorizondbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig">HorizondbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore">putPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool">putReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword">resetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo">resetAdministratorPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion">resetAdministratorPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays">resetBackupRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled">resetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore">resetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion">resetPostgresqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity"></a>

```typescript
public putIdentity(value: HorizondbClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `putPointInTimeRestore` <a name="putPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore"></a>

```typescript
public putPointInTimeRestore(value: HorizondbClusterPointInTimeRestore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `putReadWritePool` <a name="putReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool"></a>

```typescript
public putReadWritePool(value: HorizondbClusterReadWritePool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: HorizondbClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `resetAdministratorPassword` <a name="resetAdministratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword"></a>

```typescript
public resetAdministratorPassword(): void
```

##### `resetAdministratorPasswordWo` <a name="resetAdministratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo"></a>

```typescript
public resetAdministratorPasswordWo(): void
```

##### `resetAdministratorPasswordWoVersion` <a name="resetAdministratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion"></a>

```typescript
public resetAdministratorPasswordWoVersion(): void
```

##### `resetBackupRetentionInDays` <a name="resetBackupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays"></a>

```typescript
public resetBackupRetentionInDays(): void
```

##### `resetGeoRedundantBackupEnabled` <a name="resetGeoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled"></a>

```typescript
public resetGeoRedundantBackupEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetPointInTimeRestore` <a name="resetPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore"></a>

```typescript
public resetPointInTimeRestore(): void
```

##### `resetPostgresqlVersion` <a name="resetPostgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion"></a>

```typescript
public resetPostgresqlVersion(): void
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess"></a>

```typescript
public resetPublicNetworkAccess(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

horizondbCluster.HorizondbCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

horizondbCluster.HorizondbCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

horizondbCluster.HorizondbCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

horizondbCluster.HorizondbCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HorizondbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HorizondbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HorizondbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool">readWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput">administratorPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput">administratorPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput">administratorPasswordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput">backupRetentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput">geoRedundantBackupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput">pointInTimeRestoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput">postgresqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput">readWritePoolInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays">backupRetentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion">postgresqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity"></a>

```typescript
public readonly identity: HorizondbClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a>

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: HorizondbClusterPointInTimeRestoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a>

---

##### `readWritePool`<sup>Required</sup> <a name="readWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool"></a>

```typescript
public readonly readWritePool: HorizondbClusterReadWritePoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts"></a>

```typescript
public readonly timeouts: HorizondbClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorPasswordInput`<sup>Optional</sup> <a name="administratorPasswordInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput"></a>

```typescript
public readonly administratorPasswordInput: string;
```

- *Type:* string

---

##### `administratorPasswordWoInput`<sup>Optional</sup> <a name="administratorPasswordWoInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput"></a>

```typescript
public readonly administratorPasswordWoInput: string;
```

- *Type:* string

---

##### `administratorPasswordWoVersionInput`<sup>Optional</sup> <a name="administratorPasswordWoVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput"></a>

```typescript
public readonly administratorPasswordWoVersionInput: number;
```

- *Type:* number

---

##### `backupRetentionInDaysInput`<sup>Optional</sup> <a name="backupRetentionInDaysInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput"></a>

```typescript
public readonly backupRetentionInDaysInput: number;
```

- *Type:* number

---

##### `geoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="geoRedundantBackupEnabledInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput"></a>

```typescript
public readonly geoRedundantBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput"></a>

```typescript
public readonly identityInput: HorizondbClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pointInTimeRestoreInput`<sup>Optional</sup> <a name="pointInTimeRestoreInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput"></a>

```typescript
public readonly pointInTimeRestoreInput: HorizondbClusterPointInTimeRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `postgresqlVersionInput`<sup>Optional</sup> <a name="postgresqlVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput"></a>

```typescript
public readonly postgresqlVersionInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput"></a>

```typescript
public readonly publicNetworkAccessInput: string;
```

- *Type:* string

---

##### `readWritePoolInput`<sup>Optional</sup> <a name="readWritePoolInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput"></a>

```typescript
public readonly readWritePoolInput: HorizondbClusterReadWritePool;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HorizondbClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorPassword`<sup>Required</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

---

##### ~~`administratorPasswordWo`~~<sup>Required</sup> <a name="administratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly administratorPasswordWo: string;
```

- *Type:* string

---

##### `administratorPasswordWoVersion`<sup>Required</sup> <a name="administratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion"></a>

```typescript
public readonly administratorPasswordWoVersion: number;
```

- *Type:* number

---

##### `backupRetentionInDays`<sup>Required</sup> <a name="backupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays"></a>

```typescript
public readonly backupRetentionInDays: number;
```

- *Type:* number

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `postgresqlVersion`<sup>Required</sup> <a name="postgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion"></a>

```typescript
public readonly postgresqlVersion: string;
```

- *Type:* string

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizondbClusterConfig <a name="HorizondbClusterConfig" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterConfig: horizondbCluster.HorizondbClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool">readWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays">backupRetentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion">postgresqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `readWritePool`<sup>Required</sup> <a name="readWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool"></a>

```typescript
public readonly readWritePool: HorizondbClusterReadWritePool;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `administratorPasswordWo`<sup>Optional</sup> <a name="administratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo"></a>

```typescript
public readonly administratorPasswordWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `administratorPasswordWoVersion`<sup>Optional</sup> <a name="administratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion"></a>

```typescript
public readonly administratorPasswordWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `backupRetentionInDays`<sup>Optional</sup> <a name="backupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays"></a>

```typescript
public readonly backupRetentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity"></a>

```typescript
public readonly identity: HorizondbClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: HorizondbClusterPointInTimeRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `postgresqlVersion`<sup>Optional</sup> <a name="postgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion"></a>

```typescript
public readonly postgresqlVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HorizondbClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}

---

### HorizondbClusterIdentity <a name="HorizondbClusterIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterIdentity: horizondbCluster.HorizondbClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}.

---

### HorizondbClusterPointInTimeRestore <a name="HorizondbClusterPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterPointInTimeRestore: horizondbCluster.HorizondbClusterPointInTimeRestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId">sourceHorizondbClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}. |

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc"></a>

```typescript
public readonly pointInTimeUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}.

---

##### `sourceHorizondbClusterId`<sup>Required</sup> <a name="sourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId"></a>

```typescript
public readonly sourceHorizondbClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}.

---

### HorizondbClusterReadWritePool <a name="HorizondbClusterReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterReadWritePool: horizondbCluster.HorizondbClusterReadWritePool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | compute block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute"></a>

```typescript
public readonly compute: HorizondbClusterReadWritePoolCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode"></a>

```typescript
public readonly highAvailabilityMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}.

---

### HorizondbClusterReadWritePoolCompute <a name="HorizondbClusterReadWritePoolCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterReadWritePoolCompute: horizondbCluster.HorizondbClusterReadWritePoolCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation">generation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor">processor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores">vcores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}. |

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}.

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}.

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}.

---

### HorizondbClusterTimeouts <a name="HorizondbClusterTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

const horizondbClusterTimeouts: horizondbCluster.HorizondbClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HorizondbClusterIdentityOutputReference <a name="HorizondbClusterIdentityOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HorizondbClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---


### HorizondbClusterPointInTimeRestoreOutputReference <a name="HorizondbClusterPointInTimeRestoreOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation"></a>

```typescript
public resetSourceLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput">pointInTimeUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput">sourceHorizondbClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput">sourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId">sourceHorizondbClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pointInTimeUtcInput`<sup>Optional</sup> <a name="pointInTimeUtcInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput"></a>

```typescript
public readonly pointInTimeUtcInput: string;
```

- *Type:* string

---

##### `sourceHorizondbClusterIdInput`<sup>Optional</sup> <a name="sourceHorizondbClusterIdInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput"></a>

```typescript
public readonly sourceHorizondbClusterIdInput: string;
```

- *Type:* string

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput"></a>

```typescript
public readonly sourceLocationInput: string;
```

- *Type:* string

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc"></a>

```typescript
public readonly pointInTimeUtc: string;
```

- *Type:* string

---

##### `sourceHorizondbClusterId`<sup>Required</sup> <a name="sourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId"></a>

```typescript
public readonly sourceHorizondbClusterId: string;
```

- *Type:* string

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HorizondbClusterPointInTimeRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---


### HorizondbClusterReadWritePoolComputeOutputReference <a name="HorizondbClusterReadWritePoolComputeOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput">generationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput">processorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput">vcoresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor">processor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores">vcores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput"></a>

```typescript
public readonly generationInput: number;
```

- *Type:* number

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput"></a>

```typescript
public readonly processorInput: string;
```

- *Type:* string

---

##### `vcoresInput`<sup>Optional</sup> <a name="vcoresInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput"></a>

```typescript
public readonly vcoresInput: number;
```

- *Type:* number

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor"></a>

```typescript
public readonly processor: string;
```

- *Type:* string

---

##### `vcores`<sup>Required</sup> <a name="vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores"></a>

```typescript
public readonly vcores: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HorizondbClusterReadWritePoolCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


### HorizondbClusterReadWritePoolOutputReference <a name="HorizondbClusterReadWritePoolOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbClusterReadWritePoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute">putCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompute` <a name="putCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute"></a>

```typescript
public putCompute(value: HorizondbClusterReadWritePoolCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput">computeInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput">highAvailabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute"></a>

```typescript
public readonly compute: HorizondbClusterReadWritePoolComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput"></a>

```typescript
public readonly computeInput: HorizondbClusterReadWritePoolCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---

##### `highAvailabilityModeInput`<sup>Optional</sup> <a name="highAvailabilityModeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput"></a>

```typescript
public readonly highAvailabilityModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode"></a>

```typescript
public readonly highAvailabilityMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HorizondbClusterReadWritePool;
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---


### HorizondbClusterTimeoutsOutputReference <a name="HorizondbClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { horizondbCluster } from '@cdktn/provider-azurerm'

new horizondbCluster.HorizondbClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HorizondbClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---



