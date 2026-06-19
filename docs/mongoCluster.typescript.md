# `mongoCluster` Submodule <a name="`mongoCluster` Submodule" id="@cdktn/provider-azurerm.mongoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongoCluster <a name="MongoCluster" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster azurerm_mongo_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoCluster(scope: Construct, id: string, config: MongoClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig">MongoClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig">MongoClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.putRestore">putRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorPassword">resetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorUsername">resetAdministratorUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAuthenticationMethods">resetAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetComputeTier">resetComputeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetDataApiModeEnabled">resetDataApiModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetHighAvailabilityMode">resetHighAvailabilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetPreviewFeatures">resetPreviewFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetRestore">resetRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetShardCount">resetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetSourceServerId">resetSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetStorageSizeInGb">resetStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: MongoClusterCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putIdentity"></a>

```typescript
public putIdentity(value: MongoClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a>

---

##### `putRestore` <a name="putRestore" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putRestore"></a>

```typescript
public putRestore(value: MongoClusterRestore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putRestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: MongoClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `resetAdministratorPassword` <a name="resetAdministratorPassword" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorPassword"></a>

```typescript
public resetAdministratorPassword(): void
```

##### `resetAdministratorUsername` <a name="resetAdministratorUsername" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorUsername"></a>

```typescript
public resetAdministratorUsername(): void
```

##### `resetAuthenticationMethods` <a name="resetAuthenticationMethods" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetAuthenticationMethods"></a>

```typescript
public resetAuthenticationMethods(): void
```

##### `resetComputeTier` <a name="resetComputeTier" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetComputeTier"></a>

```typescript
public resetComputeTier(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDataApiModeEnabled` <a name="resetDataApiModeEnabled" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetDataApiModeEnabled"></a>

```typescript
public resetDataApiModeEnabled(): void
```

##### `resetHighAvailabilityMode` <a name="resetHighAvailabilityMode" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetHighAvailabilityMode"></a>

```typescript
public resetHighAvailabilityMode(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetPreviewFeatures` <a name="resetPreviewFeatures" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetPreviewFeatures"></a>

```typescript
public resetPreviewFeatures(): void
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetPublicNetworkAccess"></a>

```typescript
public resetPublicNetworkAccess(): void
```

##### `resetRestore` <a name="resetRestore" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetRestore"></a>

```typescript
public resetRestore(): void
```

##### `resetShardCount` <a name="resetShardCount" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetShardCount"></a>

```typescript
public resetShardCount(): void
```

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetSourceLocation"></a>

```typescript
public resetSourceLocation(): void
```

##### `resetSourceServerId` <a name="resetSourceServerId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetSourceServerId"></a>

```typescript
public resetSourceServerId(): void
```

##### `resetStorageSizeInGb` <a name="resetStorageSizeInGb" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetStorageSizeInGb"></a>

```typescript
public resetStorageSizeInGb(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MongoCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isConstruct"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

mongoCluster.MongoCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

mongoCluster.MongoCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

mongoCluster.MongoCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

mongoCluster.MongoCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MongoCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MongoCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MongoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MongoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList">MongoClusterConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference">MongoClusterCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference">MongoClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.restore">restore</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference">MongoClusterRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorPasswordInput">administratorPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsernameInput">administratorUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.authenticationMethodsInput">authenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.computeTierInput">computeTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dataApiModeEnabledInput">dataApiModeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityModeInput">highAvailabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.previewFeaturesInput">previewFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.restoreInput">restoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.shardCountInput">shardCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocationInput">sourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerIdInput">sourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsername">administratorUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.authenticationMethods">authenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.computeTier">computeTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dataApiModeEnabled">dataApiModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.previewFeatures">previewFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: MongoClusterConnectionStringsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList">MongoClusterConnectionStringsList</a>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: MongoClusterCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference">MongoClusterCustomerManagedKeyOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.identity"></a>

```typescript
public readonly identity: MongoClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference">MongoClusterIdentityOutputReference</a>

---

##### `restore`<sup>Required</sup> <a name="restore" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.restore"></a>

```typescript
public readonly restore: MongoClusterRestoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference">MongoClusterRestoreOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.timeouts"></a>

```typescript
public readonly timeouts: MongoClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a>

---

##### `administratorPasswordInput`<sup>Optional</sup> <a name="administratorPasswordInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorPasswordInput"></a>

```typescript
public readonly administratorPasswordInput: string;
```

- *Type:* string

---

##### `administratorUsernameInput`<sup>Optional</sup> <a name="administratorUsernameInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsernameInput"></a>

```typescript
public readonly administratorUsernameInput: string;
```

- *Type:* string

---

##### `authenticationMethodsInput`<sup>Optional</sup> <a name="authenticationMethodsInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.authenticationMethodsInput"></a>

```typescript
public readonly authenticationMethodsInput: string[];
```

- *Type:* string[]

---

##### `computeTierInput`<sup>Optional</sup> <a name="computeTierInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.computeTierInput"></a>

```typescript
public readonly computeTierInput: string;
```

- *Type:* string

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: MongoClusterCustomerManagedKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a>

---

##### `dataApiModeEnabledInput`<sup>Optional</sup> <a name="dataApiModeEnabledInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dataApiModeEnabledInput"></a>

```typescript
public readonly dataApiModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `highAvailabilityModeInput`<sup>Optional</sup> <a name="highAvailabilityModeInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityModeInput"></a>

```typescript
public readonly highAvailabilityModeInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.identityInput"></a>

```typescript
public readonly identityInput: MongoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `previewFeaturesInput`<sup>Optional</sup> <a name="previewFeaturesInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.previewFeaturesInput"></a>

```typescript
public readonly previewFeaturesInput: string[];
```

- *Type:* string[]

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccessInput"></a>

```typescript
public readonly publicNetworkAccessInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restoreInput`<sup>Optional</sup> <a name="restoreInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.restoreInput"></a>

```typescript
public readonly restoreInput: MongoClusterRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a>

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.shardCountInput"></a>

```typescript
public readonly shardCountInput: number;
```

- *Type:* number

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocationInput"></a>

```typescript
public readonly sourceLocationInput: string;
```

- *Type:* string

---

##### `sourceServerIdInput`<sup>Optional</sup> <a name="sourceServerIdInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerIdInput"></a>

```typescript
public readonly sourceServerIdInput: string;
```

- *Type:* string

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGbInput"></a>

```typescript
public readonly storageSizeInGbInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MongoClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `administratorPassword`<sup>Required</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

---

##### `administratorUsername`<sup>Required</sup> <a name="administratorUsername" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsername"></a>

```typescript
public readonly administratorUsername: string;
```

- *Type:* string

---

##### `authenticationMethods`<sup>Required</sup> <a name="authenticationMethods" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.authenticationMethods"></a>

```typescript
public readonly authenticationMethods: string[];
```

- *Type:* string[]

---

##### `computeTier`<sup>Required</sup> <a name="computeTier" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.computeTier"></a>

```typescript
public readonly computeTier: string;
```

- *Type:* string

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `dataApiModeEnabled`<sup>Required</sup> <a name="dataApiModeEnabled" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.dataApiModeEnabled"></a>

```typescript
public readonly dataApiModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityMode"></a>

```typescript
public readonly highAvailabilityMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `previewFeatures`<sup>Required</sup> <a name="previewFeatures" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.previewFeatures"></a>

```typescript
public readonly previewFeatures: string[];
```

- *Type:* string[]

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.mongoCluster.MongoCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MongoClusterConfig <a name="MongoClusterConfig" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterConfig: mongoCluster.MongoClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#location MongoCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#name MongoCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorUsername">administratorUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.authenticationMethods">authenticationMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#authentication_methods MongoCluster#authentication_methods}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.computeTier">computeTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.dataApiModeEnabled">dataApiModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#data_api_mode_enabled MongoCluster#data_api_mode_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.previewFeatures">previewFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.restore">restore</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a></code> | restore block. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.shardCount">shardCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#tags MongoCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#version MongoCluster#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#location MongoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#name MongoCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}.

---

##### `administratorUsername`<sup>Optional</sup> <a name="administratorUsername" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorUsername"></a>

```typescript
public readonly administratorUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}.

---

##### `authenticationMethods`<sup>Optional</sup> <a name="authenticationMethods" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.authenticationMethods"></a>

```typescript
public readonly authenticationMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#authentication_methods MongoCluster#authentication_methods}.

---

##### `computeTier`<sup>Optional</sup> <a name="computeTier" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.computeTier"></a>

```typescript
public readonly computeTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: MongoClusterCustomerManagedKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#customer_managed_key MongoCluster#customer_managed_key}

---

##### `dataApiModeEnabled`<sup>Optional</sup> <a name="dataApiModeEnabled" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.dataApiModeEnabled"></a>

```typescript
public readonly dataApiModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#data_api_mode_enabled MongoCluster#data_api_mode_enabled}.

---

##### `highAvailabilityMode`<sup>Optional</sup> <a name="highAvailabilityMode" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.highAvailabilityMode"></a>

```typescript
public readonly highAvailabilityMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.identity"></a>

```typescript
public readonly identity: MongoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#identity MongoCluster#identity}

---

##### `previewFeatures`<sup>Optional</sup> <a name="previewFeatures" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.previewFeatures"></a>

```typescript
public readonly previewFeatures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.restore"></a>

```typescript
public readonly restore: MongoClusterRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#restore MongoCluster#restore}

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}.

---

##### `sourceServerId`<sup>Optional</sup> <a name="sourceServerId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}.

---

##### `storageSizeInGb`<sup>Optional</sup> <a name="storageSizeInGb" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageSizeInGb"></a>

```typescript
public readonly storageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#tags MongoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MongoClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#version MongoCluster#version}.

---

### MongoClusterConnectionStrings <a name="MongoClusterConnectionStrings" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStrings.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterConnectionStrings: mongoCluster.MongoClusterConnectionStrings = { ... }
```


### MongoClusterCustomerManagedKey <a name="MongoClusterCustomerManagedKey" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterCustomerManagedKey: mongoCluster.MongoClusterCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#key_vault_key_id MongoCluster#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#user_assigned_identity_id MongoCluster#user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#key_vault_key_id MongoCluster#key_vault_key_id}.

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#user_assigned_identity_id MongoCluster#user_assigned_identity_id}.

---

### MongoClusterIdentity <a name="MongoClusterIdentity" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterIdentity: mongoCluster.MongoClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#identity_ids MongoCluster#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#type MongoCluster#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#identity_ids MongoCluster#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#type MongoCluster#type}.

---

### MongoClusterRestore <a name="MongoClusterRestore" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterRestore: mongoCluster.MongoClusterRestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#point_in_time_utc MongoCluster#point_in_time_utc}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_id MongoCluster#source_id}. |

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore.property.pointInTimeUtc"></a>

```typescript
public readonly pointInTimeUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#point_in_time_utc MongoCluster#point_in_time_utc}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#source_id MongoCluster#source_id}.

---

### MongoClusterTimeouts <a name="MongoClusterTimeouts" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

const mongoClusterTimeouts: mongoCluster.MongoClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#create MongoCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#delete MongoCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#read MongoCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#update MongoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#create MongoCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#delete MongoCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#read MongoCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/mongo_cluster#update MongoCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MongoClusterConnectionStringsList <a name="MongoClusterConnectionStringsList" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.get"></a>

```typescript
public get(index: number): MongoClusterConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MongoClusterConnectionStringsOutputReference <a name="MongoClusterConnectionStringsOutputReference" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStrings">MongoClusterConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MongoClusterConnectionStrings;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterConnectionStrings">MongoClusterConnectionStrings</a>

---


### MongoClusterCustomerManagedKeyOutputReference <a name="MongoClusterCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MongoClusterCustomerManagedKey;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterCustomerManagedKey">MongoClusterCustomerManagedKey</a>

---


### MongoClusterIdentityOutputReference <a name="MongoClusterIdentityOutputReference" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MongoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterIdentity">MongoClusterIdentity</a>

---


### MongoClusterRestoreOutputReference <a name="MongoClusterRestoreOutputReference" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.pointInTimeUtcInput">pointInTimeUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.pointInTimeUtc">pointInTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pointInTimeUtcInput`<sup>Optional</sup> <a name="pointInTimeUtcInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.pointInTimeUtcInput"></a>

```typescript
public readonly pointInTimeUtcInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `pointInTimeUtc`<sup>Required</sup> <a name="pointInTimeUtc" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.pointInTimeUtc"></a>

```typescript
public readonly pointInTimeUtc: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MongoClusterRestore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterRestore">MongoClusterRestore</a>

---


### MongoClusterTimeoutsOutputReference <a name="MongoClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { mongoCluster } from '@cdktn/provider-azurerm'

new mongoCluster.MongoClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MongoClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---



