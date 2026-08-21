# `dataFactoryIntegrationRuntimeAzure` Submodule <a name="`dataFactoryIntegrationRuntimeAzure` Submodule" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzure <a name="DataFactoryIntegrationRuntimeAzure" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

new dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled">resetCleanupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes">resetInteractiveAuthoringTimeToLiveInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin">resetTimeToLiveMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled">resetVirtualNetworkEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryIntegrationRuntimeAzureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `resetCleanupEnabled` <a name="resetCleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled"></a>

```typescript
public resetCleanupEnabled(): void
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInteractiveAuthoringTimeToLiveInMinutes` <a name="resetInteractiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetInteractiveAuthoringTimeToLiveInMinutes"></a>

```typescript
public resetInteractiveAuthoringTimeToLiveInMinutes(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeToLiveMin` <a name="resetTimeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```typescript
public resetTimeToLiveMin(): void
```

##### `resetVirtualNetworkEnabled` <a name="resetVirtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled"></a>

```typescript
public resetVirtualNetworkEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryIntegrationRuntimeAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput">cleanupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput">interactiveAuthoringTimeToLiveInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput">timeToLiveMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput">virtualNetworkEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled">cleanupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes">interactiveAuthoringTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin">timeToLiveMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled">virtualNetworkEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `cleanupEnabledInput`<sup>Optional</sup> <a name="cleanupEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput"></a>

```typescript
public readonly cleanupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interactiveAuthoringTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="interactiveAuthoringTimeToLiveInMinutesInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutesInput"></a>

```typescript
public readonly interactiveAuthoringTimeToLiveInMinutesInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryIntegrationRuntimeAzureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `timeToLiveMinInput`<sup>Optional</sup> <a name="timeToLiveMinInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```typescript
public readonly timeToLiveMinInput: number;
```

- *Type:* number

---

##### `virtualNetworkEnabledInput`<sup>Optional</sup> <a name="virtualNetworkEnabledInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput"></a>

```typescript
public readonly virtualNetworkEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cleanupEnabled`<sup>Required</sup> <a name="cleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled"></a>

```typescript
public readonly cleanupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interactiveAuthoringTimeToLiveInMinutes`<sup>Required</sup> <a name="interactiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```typescript
public readonly interactiveAuthoringTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeToLiveMin`<sup>Required</sup> <a name="timeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```typescript
public readonly timeToLiveMin: number;
```

- *Type:* number

---

##### `virtualNetworkEnabled`<sup>Required</sup> <a name="virtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled"></a>

```typescript
public readonly virtualNetworkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureConfig <a name="DataFactoryIntegrationRuntimeAzureConfig" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

const dataFactoryIntegrationRuntimeAzureConfig: dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled">cleanupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType">computeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount">coreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes">interactiveAuthoringTimeToLiveInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin">timeToLiveMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled">virtualNetworkEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}.

---

##### `cleanupEnabled`<sup>Optional</sup> <a name="cleanupEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled"></a>

```typescript
public readonly cleanupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}.

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interactiveAuthoringTimeToLiveInMinutes`<sup>Optional</sup> <a name="interactiveAuthoringTimeToLiveInMinutes" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.interactiveAuthoringTimeToLiveInMinutes"></a>

```typescript
public readonly interactiveAuthoringTimeToLiveInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#interactive_authoring_time_to_live_in_minutes DataFactoryIntegrationRuntimeAzure#interactive_authoring_time_to_live_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryIntegrationRuntimeAzureTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}

---

##### `timeToLiveMin`<sup>Optional</sup> <a name="timeToLiveMin" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```typescript
public readonly timeToLiveMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}.

---

##### `virtualNetworkEnabled`<sup>Optional</sup> <a name="virtualNetworkEnabled" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled"></a>

```typescript
public readonly virtualNetworkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}.

---

### DataFactoryIntegrationRuntimeAzureTimeouts <a name="DataFactoryIntegrationRuntimeAzureTimeouts" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

const dataFactoryIntegrationRuntimeAzureTimeouts: dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeAzure } from '@cdktn/provider-azurerm'

new dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryIntegrationRuntimeAzureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---



