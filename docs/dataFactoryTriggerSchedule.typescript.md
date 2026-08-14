# `dataFactoryTriggerSchedule` Submodule <a name="`dataFactoryTriggerSchedule` Submodule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerSchedule <a name="DataFactoryTriggerSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerSchedule(scope: Construct, id: string, config: DataFactoryTriggerScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig">DataFactoryTriggerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig">DataFactoryTriggerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName">resetPipelineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters">resetPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline"></a>

```typescript
public putPipeline(value: IResolvable | DataFactoryTriggerSchedulePipeline[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule"></a>

```typescript
public putSchedule(value: DataFactoryTriggerScheduleSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryTriggerScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `resetActivated` <a name="resetActivated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated"></a>

```typescript
public resetActivated(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline"></a>

```typescript
public resetPipeline(): void
```

##### `resetPipelineName` <a name="resetPipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName"></a>

```typescript
public resetPipelineName(): void
```

##### `resetPipelineParameters` <a name="resetPipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters"></a>

```typescript
public resetPipelineParameters(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryTriggerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline">pipeline</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput">activatedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput">pipelineInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput">pipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput">pipelineParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated">activated</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters">pipelineParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline"></a>

```typescript
public readonly pipeline: DataFactoryTriggerSchedulePipelineList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule"></a>

```typescript
public readonly schedule: DataFactoryTriggerScheduleScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput"></a>

```typescript
public readonly activatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: IResolvable | DataFactoryTriggerSchedulePipeline[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput"></a>

```typescript
public readonly pipelineNameInput: string;
```

- *Type:* string

---

##### `pipelineParametersInput`<sup>Optional</sup> <a name="pipelineParametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput"></a>

```typescript
public readonly pipelineParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: DataFactoryTriggerScheduleSchedule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryTriggerScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `pipelineParameters`<sup>Required</sup> <a name="pipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters"></a>

```typescript
public readonly pipelineParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerScheduleConfig <a name="DataFactoryTriggerScheduleConfig" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

const dataFactoryTriggerScheduleConfig: dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated">activated</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline">pipeline</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | pipeline block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName">pipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters">pipelineParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline"></a>

```typescript
public readonly pipeline: IResolvable | DataFactoryTriggerSchedulePipeline[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `pipelineParameters`<sup>Optional</sup> <a name="pipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters"></a>

```typescript
public readonly pipelineParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule"></a>

```typescript
public readonly schedule: DataFactoryTriggerScheduleSchedule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerScheduleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

### DataFactoryTriggerSchedulePipeline <a name="DataFactoryTriggerSchedulePipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

const dataFactoryTriggerSchedulePipeline: dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}.

---

### DataFactoryTriggerScheduleSchedule <a name="DataFactoryTriggerScheduleSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

const dataFactoryTriggerScheduleSchedule: dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours">hours</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes">minutes</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly">monthly</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | monthly block. |

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}.

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours"></a>

```typescript
public readonly hours: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes"></a>

```typescript
public readonly minutes: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly"></a>

```typescript
public readonly monthly: IResolvable | DataFactoryTriggerScheduleScheduleMonthly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#monthly DataFactoryTriggerSchedule#monthly}

---

### DataFactoryTriggerScheduleScheduleMonthly <a name="DataFactoryTriggerScheduleScheduleMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

const dataFactoryTriggerScheduleScheduleMonthly: dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday">weekday</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week">week</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}. |

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday"></a>

```typescript
public readonly weekday: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}.

---

##### `week`<sup>Optional</sup> <a name="week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week"></a>

```typescript
public readonly week: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}.

---

### DataFactoryTriggerScheduleTimeouts <a name="DataFactoryTriggerScheduleTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

const dataFactoryTriggerScheduleTimeouts: dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerSchedulePipelineList <a name="DataFactoryTriggerSchedulePipelineList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get"></a>

```typescript
public get(index: number): DataFactoryTriggerSchedulePipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerSchedulePipeline[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>[]

---


### DataFactoryTriggerSchedulePipelineOutputReference <a name="DataFactoryTriggerSchedulePipelineOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerSchedulePipeline;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>

---


### DataFactoryTriggerScheduleScheduleMonthlyList <a name="DataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```typescript
public get(index: number): DataFactoryTriggerScheduleScheduleMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerScheduleScheduleMonthly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---


### DataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek">resetWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeek` <a name="resetWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek"></a>

```typescript
public resetWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput">weekdayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput">weekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">week</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">weekday</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weekdayInput`<sup>Optional</sup> <a name="weekdayInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput"></a>

```typescript
public readonly weekdayInput: string;
```

- *Type:* string

---

##### `weekInput`<sup>Optional</sup> <a name="weekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput"></a>

```typescript
public readonly weekInput: number;
```

- *Type:* number

---

##### `week`<sup>Required</sup> <a name="week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```typescript
public readonly week: number;
```

- *Type:* number

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```typescript
public readonly weekday: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerScheduleScheduleMonthly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>

---


### DataFactoryTriggerScheduleScheduleOutputReference <a name="DataFactoryTriggerScheduleScheduleOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthly` <a name="putMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly"></a>

```typescript
public putMonthly(value: IResolvable | DataFactoryTriggerScheduleScheduleMonthly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHours` <a name="resetHours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly"></a>

```typescript
public resetMonthly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput">hoursInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput">minutesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours">hours</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes">minutes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```typescript
public readonly monthly: DataFactoryTriggerScheduleScheduleMonthlyList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number[];
```

- *Type:* number[]

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number[];
```

- *Type:* number[]

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput"></a>

```typescript
public readonly monthlyInput: IResolvable | DataFactoryTriggerScheduleScheduleMonthly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>[]

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```typescript
public readonly hours: number[];
```

- *Type:* number[]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryTriggerScheduleSchedule;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---


### DataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerSchedule } from '@cdktn/provider-azurerm'

new dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerScheduleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---



