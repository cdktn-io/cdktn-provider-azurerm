# `kustoCluster` Submodule <a name="`kustoCluster` Submodule" id="@cdktn/provider-azurerm.kustoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoCluster <a name="KustoCluster" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster azurerm_kusto_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoCluster(scope: Construct, id: string, config: KustoClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig">KustoClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig">KustoClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtension">putLanguageExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtensions">putLanguageExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale">putOptimizedAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration">putVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAllowedFqdns">resetAllowedFqdns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAllowedIpRanges">resetAllowedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAutoStopEnabled">resetAutoStopEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetDiskEncryptionEnabled">resetDiskEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetDoubleEncryptionEnabled">resetDoubleEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtension">resetLanguageExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtensions">resetLanguageExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOptimizedAutoScale">resetOptimizedAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOutboundNetworkAccessRestricted">resetOutboundNetworkAccessRestricted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPublicIpType">resetPublicIpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPurgeEnabled">resetPurgeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetStreamingIngestionEnabled">resetStreamingIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTrustedExternalTenants">resetTrustedExternalTenants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetVirtualNetworkConfiguration">resetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putIdentity"></a>

```typescript
public putIdentity(value: KustoClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

---

##### `putLanguageExtension` <a name="putLanguageExtension" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtension"></a>

```typescript
public putLanguageExtension(value: IResolvable | KustoClusterLanguageExtension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtension.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]

---

##### `putLanguageExtensions` <a name="putLanguageExtensions" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtensions"></a>

```typescript
public putLanguageExtensions(value: IResolvable | KustoClusterLanguageExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putLanguageExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]

---

##### `putOptimizedAutoScale` <a name="putOptimizedAutoScale" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale"></a>

```typescript
public putOptimizedAutoScale(value: KustoClusterOptimizedAutoScale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

---

##### `putSku` <a name="putSku" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putSku"></a>

```typescript
public putSku(value: KustoClusterSku): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: KustoClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

---

##### `putVirtualNetworkConfiguration` <a name="putVirtualNetworkConfiguration" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration"></a>

```typescript
public putVirtualNetworkConfiguration(value: KustoClusterVirtualNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

---

##### `resetAllowedFqdns` <a name="resetAllowedFqdns" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAllowedFqdns"></a>

```typescript
public resetAllowedFqdns(): void
```

##### `resetAllowedIpRanges` <a name="resetAllowedIpRanges" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAllowedIpRanges"></a>

```typescript
public resetAllowedIpRanges(): void
```

##### `resetAutoStopEnabled` <a name="resetAutoStopEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetAutoStopEnabled"></a>

```typescript
public resetAutoStopEnabled(): void
```

##### `resetDiskEncryptionEnabled` <a name="resetDiskEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetDiskEncryptionEnabled"></a>

```typescript
public resetDiskEncryptionEnabled(): void
```

##### `resetDoubleEncryptionEnabled` <a name="resetDoubleEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetDoubleEncryptionEnabled"></a>

```typescript
public resetDoubleEncryptionEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLanguageExtension` <a name="resetLanguageExtension" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtension"></a>

```typescript
public resetLanguageExtension(): void
```

##### `resetLanguageExtensions` <a name="resetLanguageExtensions" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtensions"></a>

```typescript
public resetLanguageExtensions(): void
```

##### `resetOptimizedAutoScale` <a name="resetOptimizedAutoScale" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOptimizedAutoScale"></a>

```typescript
public resetOptimizedAutoScale(): void
```

##### `resetOutboundNetworkAccessRestricted` <a name="resetOutboundNetworkAccessRestricted" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetOutboundNetworkAccessRestricted"></a>

```typescript
public resetOutboundNetworkAccessRestricted(): void
```

##### `resetPublicIpType` <a name="resetPublicIpType" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPublicIpType"></a>

```typescript
public resetPublicIpType(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetPurgeEnabled` <a name="resetPurgeEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetPurgeEnabled"></a>

```typescript
public resetPurgeEnabled(): void
```

##### `resetStreamingIngestionEnabled` <a name="resetStreamingIngestionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetStreamingIngestionEnabled"></a>

```typescript
public resetStreamingIngestionEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrustedExternalTenants` <a name="resetTrustedExternalTenants" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetTrustedExternalTenants"></a>

```typescript
public resetTrustedExternalTenants(): void
```

##### `resetVirtualNetworkConfiguration` <a name="resetVirtualNetworkConfiguration" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetVirtualNetworkConfiguration"></a>

```typescript
public resetVirtualNetworkConfiguration(): void
```

##### `resetZones` <a name="resetZones" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KustoCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isConstruct"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

kustoCluster.KustoCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

kustoCluster.KustoCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

kustoCluster.KustoCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

kustoCluster.KustoCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KustoCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KustoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.dataIngestionUri">dataIngestionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference">KustoClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtension">languageExtension</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList">KustoClusterLanguageExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensions">languageExtensions</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList">KustoClusterLanguageExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScale">optimizedAutoScale</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference">KustoClusterOptimizedAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.sku">sku</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference">KustoClusterSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference">KustoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference">KustoClusterVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdnsInput">allowedFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRangesInput">allowedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabledInput">autoStopEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabledInput">diskEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabledInput">doubleEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionInput">languageExtensionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionsInput">languageExtensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScaleInput">optimizedAutoScaleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestrictedInput">outboundNetworkAccessRestrictedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicIpTypeInput">publicIpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabledInput">purgeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.skuInput">skuInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabledInput">streamingIngestionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenantsInput">trustedExternalTenantsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfigurationInput">virtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdns">allowedFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRanges">allowedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabled">autoStopEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabled">diskEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabled">doubleEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicIpType">publicIpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabled">purgeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabled">streamingIngestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenants">trustedExternalTenants</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataIngestionUri`<sup>Required</sup> <a name="dataIngestionUri" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.dataIngestionUri"></a>

```typescript
public readonly dataIngestionUri: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.identity"></a>

```typescript
public readonly identity: KustoClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference">KustoClusterIdentityOutputReference</a>

---

##### `languageExtension`<sup>Required</sup> <a name="languageExtension" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtension"></a>

```typescript
public readonly languageExtension: KustoClusterLanguageExtensionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList">KustoClusterLanguageExtensionList</a>

---

##### `languageExtensions`<sup>Required</sup> <a name="languageExtensions" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensions"></a>

```typescript
public readonly languageExtensions: KustoClusterLanguageExtensionsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList">KustoClusterLanguageExtensionsList</a>

---

##### `optimizedAutoScale`<sup>Required</sup> <a name="optimizedAutoScale" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScale"></a>

```typescript
public readonly optimizedAutoScale: KustoClusterOptimizedAutoScaleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference">KustoClusterOptimizedAutoScaleOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.sku"></a>

```typescript
public readonly sku: KustoClusterSkuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference">KustoClusterSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.timeouts"></a>

```typescript
public readonly timeouts: KustoClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference">KustoClusterTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `virtualNetworkConfiguration`<sup>Required</sup> <a name="virtualNetworkConfiguration" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: KustoClusterVirtualNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference">KustoClusterVirtualNetworkConfigurationOutputReference</a>

---

##### `allowedFqdnsInput`<sup>Optional</sup> <a name="allowedFqdnsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdnsInput"></a>

```typescript
public readonly allowedFqdnsInput: string[];
```

- *Type:* string[]

---

##### `allowedIpRangesInput`<sup>Optional</sup> <a name="allowedIpRangesInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRangesInput"></a>

```typescript
public readonly allowedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `autoStopEnabledInput`<sup>Optional</sup> <a name="autoStopEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabledInput"></a>

```typescript
public readonly autoStopEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `diskEncryptionEnabledInput`<sup>Optional</sup> <a name="diskEncryptionEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabledInput"></a>

```typescript
public readonly diskEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleEncryptionEnabledInput`<sup>Optional</sup> <a name="doubleEncryptionEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabledInput"></a>

```typescript
public readonly doubleEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.identityInput"></a>

```typescript
public readonly identityInput: KustoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageExtensionInput`<sup>Optional</sup> <a name="languageExtensionInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionInput"></a>

```typescript
public readonly languageExtensionInput: IResolvable | KustoClusterLanguageExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]

---

##### `languageExtensionsInput`<sup>Optional</sup> <a name="languageExtensionsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionsInput"></a>

```typescript
public readonly languageExtensionsInput: IResolvable | KustoClusterLanguageExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optimizedAutoScaleInput`<sup>Optional</sup> <a name="optimizedAutoScaleInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScaleInput"></a>

```typescript
public readonly optimizedAutoScaleInput: KustoClusterOptimizedAutoScale;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

---

##### `outboundNetworkAccessRestrictedInput`<sup>Optional</sup> <a name="outboundNetworkAccessRestrictedInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestrictedInput"></a>

```typescript
public readonly outboundNetworkAccessRestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `publicIpTypeInput`<sup>Optional</sup> <a name="publicIpTypeInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicIpTypeInput"></a>

```typescript
public readonly publicIpTypeInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `purgeEnabledInput`<sup>Optional</sup> <a name="purgeEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabledInput"></a>

```typescript
public readonly purgeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.skuInput"></a>

```typescript
public readonly skuInput: KustoClusterSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

---

##### `streamingIngestionEnabledInput`<sup>Optional</sup> <a name="streamingIngestionEnabledInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabledInput"></a>

```typescript
public readonly streamingIngestionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KustoClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

---

##### `trustedExternalTenantsInput`<sup>Optional</sup> <a name="trustedExternalTenantsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenantsInput"></a>

```typescript
public readonly trustedExternalTenantsInput: string[];
```

- *Type:* string[]

---

##### `virtualNetworkConfigurationInput`<sup>Optional</sup> <a name="virtualNetworkConfigurationInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfigurationInput"></a>

```typescript
public readonly virtualNetworkConfigurationInput: KustoClusterVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `allowedFqdns`<sup>Required</sup> <a name="allowedFqdns" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdns"></a>

```typescript
public readonly allowedFqdns: string[];
```

- *Type:* string[]

---

##### `allowedIpRanges`<sup>Required</sup> <a name="allowedIpRanges" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRanges"></a>

```typescript
public readonly allowedIpRanges: string[];
```

- *Type:* string[]

---

##### `autoStopEnabled`<sup>Required</sup> <a name="autoStopEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabled"></a>

```typescript
public readonly autoStopEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `diskEncryptionEnabled`<sup>Required</sup> <a name="diskEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabled"></a>

```typescript
public readonly diskEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleEncryptionEnabled`<sup>Required</sup> <a name="doubleEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabled"></a>

```typescript
public readonly doubleEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outboundNetworkAccessRestricted`<sup>Required</sup> <a name="outboundNetworkAccessRestricted" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `publicIpType`<sup>Required</sup> <a name="publicIpType" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicIpType"></a>

```typescript
public readonly publicIpType: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `purgeEnabled`<sup>Required</sup> <a name="purgeEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabled"></a>

```typescript
public readonly purgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `streamingIngestionEnabled`<sup>Required</sup> <a name="streamingIngestionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabled"></a>

```typescript
public readonly streamingIngestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trustedExternalTenants`<sup>Required</sup> <a name="trustedExternalTenants" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenants"></a>

```typescript
public readonly trustedExternalTenants: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kustoCluster.KustoCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterConfig <a name="KustoClusterConfig" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterConfig: kustoCluster.KustoClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#location KustoCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#resource_group_name KustoCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.sku">sku</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | sku block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedFqdns">allowedFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedIpRanges">allowedIpRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.autoStopEnabled">autoStopEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.diskEncryptionEnabled">diskEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.doubleEncryptionEnabled">doubleEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#id KustoCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtension">languageExtension</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]</code> | language_extension block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtensions">languageExtensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]</code> | language_extensions block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.optimizedAutoScale">optimizedAutoScale</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | optimized_auto_scale block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicIpType">publicIpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#public_ip_type KustoCluster#public_ip_type}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.purgeEnabled">purgeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#purge_enabled KustoCluster#purge_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.streamingIngestionEnabled">streamingIngestionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#tags KustoCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.trustedExternalTenants">trustedExternalTenants</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#zones KustoCluster#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#location KustoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#resource_group_name KustoCluster#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.sku"></a>

```typescript
public readonly sku: KustoClusterSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#sku KustoCluster#sku}

---

##### `allowedFqdns`<sup>Optional</sup> <a name="allowedFqdns" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedFqdns"></a>

```typescript
public readonly allowedFqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}.

---

##### `allowedIpRanges`<sup>Optional</sup> <a name="allowedIpRanges" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedIpRanges"></a>

```typescript
public readonly allowedIpRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}.

---

##### `autoStopEnabled`<sup>Optional</sup> <a name="autoStopEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.autoStopEnabled"></a>

```typescript
public readonly autoStopEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}.

---

##### `diskEncryptionEnabled`<sup>Optional</sup> <a name="diskEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.diskEncryptionEnabled"></a>

```typescript
public readonly diskEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}.

---

##### `doubleEncryptionEnabled`<sup>Optional</sup> <a name="doubleEncryptionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.doubleEncryptionEnabled"></a>

```typescript
public readonly doubleEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#id KustoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.identity"></a>

```typescript
public readonly identity: KustoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#identity KustoCluster#identity}

---

##### `languageExtension`<sup>Optional</sup> <a name="languageExtension" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtension"></a>

```typescript
public readonly languageExtension: IResolvable | KustoClusterLanguageExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]

language_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#language_extension KustoCluster#language_extension}

---

##### `languageExtensions`<sup>Optional</sup> <a name="languageExtensions" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtensions"></a>

```typescript
public readonly languageExtensions: IResolvable | KustoClusterLanguageExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]

language_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#language_extensions KustoCluster#language_extensions}

---

##### `optimizedAutoScale`<sup>Optional</sup> <a name="optimizedAutoScale" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.optimizedAutoScale"></a>

```typescript
public readonly optimizedAutoScale: KustoClusterOptimizedAutoScale;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

optimized_auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#optimized_auto_scale KustoCluster#optimized_auto_scale}

---

##### `outboundNetworkAccessRestricted`<sup>Optional</sup> <a name="outboundNetworkAccessRestricted" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}.

---

##### `publicIpType`<sup>Optional</sup> <a name="publicIpType" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicIpType"></a>

```typescript
public readonly publicIpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#public_ip_type KustoCluster#public_ip_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}.

---

##### `purgeEnabled`<sup>Optional</sup> <a name="purgeEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.purgeEnabled"></a>

```typescript
public readonly purgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#purge_enabled KustoCluster#purge_enabled}.

---

##### `streamingIngestionEnabled`<sup>Optional</sup> <a name="streamingIngestionEnabled" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.streamingIngestionEnabled"></a>

```typescript
public readonly streamingIngestionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#tags KustoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KustoClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#timeouts KustoCluster#timeouts}

---

##### `trustedExternalTenants`<sup>Optional</sup> <a name="trustedExternalTenants" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.trustedExternalTenants"></a>

```typescript
public readonly trustedExternalTenants: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}.

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.virtualNetworkConfiguration"></a>

```typescript
public readonly virtualNetworkConfiguration: KustoClusterVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#virtual_network_configuration KustoCluster#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#zones KustoCluster#zones}.

---

### KustoClusterIdentity <a name="KustoClusterIdentity" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterIdentity: kustoCluster.KustoClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#type KustoCluster#type}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#identity_ids KustoCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#type KustoCluster#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#identity_ids KustoCluster#identity_ids}.

---

### KustoClusterLanguageExtension <a name="KustoClusterLanguageExtension" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterLanguageExtension: kustoCluster.KustoClusterLanguageExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#image KustoCluster#image}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#image KustoCluster#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}.

---

### KustoClusterLanguageExtensions <a name="KustoClusterLanguageExtensions" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterLanguageExtensions: kustoCluster.KustoClusterLanguageExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#image KustoCluster#image}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#image KustoCluster#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}.

---

### KustoClusterOptimizedAutoScale <a name="KustoClusterOptimizedAutoScale" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterOptimizedAutoScale: kustoCluster.KustoClusterOptimizedAutoScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.maximumInstances">maximumInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#maximum_instances KustoCluster#maximum_instances}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.minimumInstances">minimumInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#minimum_instances KustoCluster#minimum_instances}. |

---

##### `maximumInstances`<sup>Required</sup> <a name="maximumInstances" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.maximumInstances"></a>

```typescript
public readonly maximumInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#maximum_instances KustoCluster#maximum_instances}.

---

##### `minimumInstances`<sup>Required</sup> <a name="minimumInstances" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.minimumInstances"></a>

```typescript
public readonly minimumInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#minimum_instances KustoCluster#minimum_instances}.

---

### KustoClusterSku <a name="KustoClusterSku" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSku"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSku.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterSku: kustoCluster.KustoClusterSku = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#capacity KustoCluster#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSku.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#name KustoCluster#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSku.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#capacity KustoCluster#capacity}.

---

### KustoClusterTimeouts <a name="KustoClusterTimeouts" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterTimeouts: kustoCluster.KustoClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#create KustoCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#delete KustoCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#read KustoCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#update KustoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#create KustoCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#delete KustoCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#read KustoCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#update KustoCluster#update}.

---

### KustoClusterVirtualNetworkConfiguration <a name="KustoClusterVirtualNetworkConfiguration" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

const kustoClusterVirtualNetworkConfiguration: kustoCluster.KustoClusterVirtualNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.dataManagementPublicIpId">dataManagementPublicIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.enginePublicIpId">enginePublicIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#subnet_id KustoCluster#subnet_id}. |

---

##### `dataManagementPublicIpId`<sup>Required</sup> <a name="dataManagementPublicIpId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.dataManagementPublicIpId"></a>

```typescript
public readonly dataManagementPublicIpId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}.

---

##### `enginePublicIpId`<sup>Required</sup> <a name="enginePublicIpId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.enginePublicIpId"></a>

```typescript
public readonly enginePublicIpId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kusto_cluster#subnet_id KustoCluster#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterIdentityOutputReference <a name="KustoClusterIdentityOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KustoClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

---


### KustoClusterLanguageExtensionList <a name="KustoClusterLanguageExtensionList" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterLanguageExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.get"></a>

```typescript
public get(index: number): KustoClusterLanguageExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoClusterLanguageExtension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>[]

---


### KustoClusterLanguageExtensionOutputReference <a name="KustoClusterLanguageExtensionOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterLanguageExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoClusterLanguageExtension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtension">KustoClusterLanguageExtension</a>

---


### KustoClusterLanguageExtensionsList <a name="KustoClusterLanguageExtensionsList" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterLanguageExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.get"></a>

```typescript
public get(index: number): KustoClusterLanguageExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoClusterLanguageExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>[]

---


### KustoClusterLanguageExtensionsOutputReference <a name="KustoClusterLanguageExtensionsOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterLanguageExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoClusterLanguageExtensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterLanguageExtensions">KustoClusterLanguageExtensions</a>

---


### KustoClusterOptimizedAutoScaleOutputReference <a name="KustoClusterOptimizedAutoScaleOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterOptimizedAutoScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstancesInput">maximumInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstancesInput">minimumInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstances">maximumInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstances">minimumInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInstancesInput`<sup>Optional</sup> <a name="maximumInstancesInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstancesInput"></a>

```typescript
public readonly maximumInstancesInput: number;
```

- *Type:* number

---

##### `minimumInstancesInput`<sup>Optional</sup> <a name="minimumInstancesInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstancesInput"></a>

```typescript
public readonly minimumInstancesInput: number;
```

- *Type:* number

---

##### `maximumInstances`<sup>Required</sup> <a name="maximumInstances" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstances"></a>

```typescript
public readonly maximumInstances: number;
```

- *Type:* number

---

##### `minimumInstances`<sup>Required</sup> <a name="minimumInstances" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstances"></a>

```typescript
public readonly minimumInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KustoClusterOptimizedAutoScale;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

---


### KustoClusterSkuOutputReference <a name="KustoClusterSkuOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterSkuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacity` <a name="resetCapacity" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KustoClusterSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

---


### KustoClusterTimeoutsOutputReference <a name="KustoClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KustoClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

---


### KustoClusterVirtualNetworkConfigurationOutputReference <a name="KustoClusterVirtualNetworkConfigurationOutputReference" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { kustoCluster } from '@cdktn/provider-azurerm'

new kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpIdInput">dataManagementPublicIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpIdInput">enginePublicIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpId">dataManagementPublicIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpId">enginePublicIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataManagementPublicIpIdInput`<sup>Optional</sup> <a name="dataManagementPublicIpIdInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpIdInput"></a>

```typescript
public readonly dataManagementPublicIpIdInput: string;
```

- *Type:* string

---

##### `enginePublicIpIdInput`<sup>Optional</sup> <a name="enginePublicIpIdInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpIdInput"></a>

```typescript
public readonly enginePublicIpIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `dataManagementPublicIpId`<sup>Required</sup> <a name="dataManagementPublicIpId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpId"></a>

```typescript
public readonly dataManagementPublicIpId: string;
```

- *Type:* string

---

##### `enginePublicIpId`<sup>Required</sup> <a name="enginePublicIpId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpId"></a>

```typescript
public readonly enginePublicIpId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KustoClusterVirtualNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

---



