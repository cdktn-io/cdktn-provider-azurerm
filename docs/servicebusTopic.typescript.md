# `servicebusTopic` Submodule <a name="`servicebusTopic` Submodule" id="@cdktn/provider-azurerm.servicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusTopic <a name="ServicebusTopic" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic azurerm_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

new servicebusTopic.ServicebusTopic(scope: Construct, id: string, config: ServicebusTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig">ServicebusTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig">ServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle">resetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetBatchedOperationsEnabled">resetBatchedOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl">resetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow">resetDuplicateDetectionHistoryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetExpressEnabled">resetExpressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes">resetMaxMessageSizeInKilobytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes">resetMaxSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetPartitioningEnabled">resetPartitioningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection">resetRequiresDuplicateDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering">resetSupportOrdering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicebusTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---

##### `resetAutoDeleteOnIdle` <a name="resetAutoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle"></a>

```typescript
public resetAutoDeleteOnIdle(): void
```

##### `resetBatchedOperationsEnabled` <a name="resetBatchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetBatchedOperationsEnabled"></a>

```typescript
public resetBatchedOperationsEnabled(): void
```

##### `resetDefaultMessageTtl` <a name="resetDefaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl"></a>

```typescript
public resetDefaultMessageTtl(): void
```

##### `resetDuplicateDetectionHistoryTimeWindow` <a name="resetDuplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow"></a>

```typescript
public resetDuplicateDetectionHistoryTimeWindow(): void
```

##### `resetExpressEnabled` <a name="resetExpressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetExpressEnabled"></a>

```typescript
public resetExpressEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxMessageSizeInKilobytes` <a name="resetMaxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes"></a>

```typescript
public resetMaxMessageSizeInKilobytes(): void
```

##### `resetMaxSizeInMegabytes` <a name="resetMaxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes"></a>

```typescript
public resetMaxSizeInMegabytes(): void
```

##### `resetPartitioningEnabled` <a name="resetPartitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetPartitioningEnabled"></a>

```typescript
public resetPartitioningEnabled(): void
```

##### `resetRequiresDuplicateDetection` <a name="resetRequiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection"></a>

```typescript
public resetRequiresDuplicateDetection(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSupportOrdering` <a name="resetSupportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering"></a>

```typescript
public resetSupportOrdering(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicebusTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

servicebusTopic.ServicebusTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

servicebusTopic.ServicebusTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

servicebusTopic.ServicebusTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

servicebusTopic.ServicebusTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicebusTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput">autoDeleteOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabledInput">batchedOperationsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput">defaultMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput">duplicateDetectionHistoryTimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabledInput">expressEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput">maxMessageSizeInKilobytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput">maxSizeInMegabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabledInput">partitioningEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput">requiresDuplicateDetectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput">supportOrderingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabled">expressEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes">maxMessageSizeInKilobytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabled">partitioningEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering">supportOrdering</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a>

---

##### `autoDeleteOnIdleInput`<sup>Optional</sup> <a name="autoDeleteOnIdleInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput"></a>

```typescript
public readonly autoDeleteOnIdleInput: string;
```

- *Type:* string

---

##### `batchedOperationsEnabledInput`<sup>Optional</sup> <a name="batchedOperationsEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabledInput"></a>

```typescript
public readonly batchedOperationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultMessageTtlInput`<sup>Optional</sup> <a name="defaultMessageTtlInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput"></a>

```typescript
public readonly defaultMessageTtlInput: string;
```

- *Type:* string

---

##### `duplicateDetectionHistoryTimeWindowInput`<sup>Optional</sup> <a name="duplicateDetectionHistoryTimeWindowInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput"></a>

```typescript
public readonly duplicateDetectionHistoryTimeWindowInput: string;
```

- *Type:* string

---

##### `expressEnabledInput`<sup>Optional</sup> <a name="expressEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabledInput"></a>

```typescript
public readonly expressEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxMessageSizeInKilobytesInput`<sup>Optional</sup> <a name="maxMessageSizeInKilobytesInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput"></a>

```typescript
public readonly maxMessageSizeInKilobytesInput: number;
```

- *Type:* number

---

##### `maxSizeInMegabytesInput`<sup>Optional</sup> <a name="maxSizeInMegabytesInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput"></a>

```typescript
public readonly maxSizeInMegabytesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `partitioningEnabledInput`<sup>Optional</sup> <a name="partitioningEnabledInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabledInput"></a>

```typescript
public readonly partitioningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requiresDuplicateDetectionInput`<sup>Optional</sup> <a name="requiresDuplicateDetectionInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput"></a>

```typescript
public readonly requiresDuplicateDetectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `supportOrderingInput`<sup>Optional</sup> <a name="supportOrderingInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput"></a>

```typescript
public readonly supportOrderingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicebusTopicTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

---

##### `batchedOperationsEnabled`<sup>Required</sup> <a name="batchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.batchedOperationsEnabled"></a>

```typescript
public readonly batchedOperationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow"></a>

```typescript
public readonly duplicateDetectionHistoryTimeWindow: string;
```

- *Type:* string

---

##### `expressEnabled`<sup>Required</sup> <a name="expressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.expressEnabled"></a>

```typescript
public readonly expressEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxMessageSizeInKilobytes`<sup>Required</sup> <a name="maxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes"></a>

```typescript
public readonly maxMessageSizeInKilobytes: number;
```

- *Type:* number

---

##### `maxSizeInMegabytes`<sup>Required</sup> <a name="maxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes"></a>

```typescript
public readonly maxSizeInMegabytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `partitioningEnabled`<sup>Required</sup> <a name="partitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.partitioningEnabled"></a>

```typescript
public readonly partitioningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requiresDuplicateDetection`<sup>Required</sup> <a name="requiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection"></a>

```typescript
public readonly requiresDuplicateDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportOrdering`<sup>Required</sup> <a name="supportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering"></a>

```typescript
public readonly supportOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusTopicConfig <a name="ServicebusTopicConfig" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.Initializer"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

const servicebusTopicConfig: servicebusTopic.ServicebusTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#name ServicebusTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#batched_operations_enabled ServicebusTopic#batched_operations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.expressEnabled">expressEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#express_enabled ServicebusTopic#express_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#id ServicebusTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes">maxMessageSizeInKilobytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.partitioningEnabled">partitioningEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#partitioning_enabled ServicebusTopic#partitioning_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#status ServicebusTopic#status}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering">supportOrdering</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#name ServicebusTopic#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}.

---

##### `batchedOperationsEnabled`<sup>Optional</sup> <a name="batchedOperationsEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.batchedOperationsEnabled"></a>

```typescript
public readonly batchedOperationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#batched_operations_enabled ServicebusTopic#batched_operations_enabled}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}.

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```typescript
public readonly duplicateDetectionHistoryTimeWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}.

---

##### `expressEnabled`<sup>Optional</sup> <a name="expressEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.expressEnabled"></a>

```typescript
public readonly expressEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#express_enabled ServicebusTopic#express_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#id ServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxMessageSizeInKilobytes`<sup>Optional</sup> <a name="maxMessageSizeInKilobytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes"></a>

```typescript
public readonly maxMessageSizeInKilobytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}.

---

##### `maxSizeInMegabytes`<sup>Optional</sup> <a name="maxSizeInMegabytes" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes"></a>

```typescript
public readonly maxSizeInMegabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}.

---

##### `partitioningEnabled`<sup>Optional</sup> <a name="partitioningEnabled" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.partitioningEnabled"></a>

```typescript
public readonly partitioningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#partitioning_enabled ServicebusTopic#partitioning_enabled}.

---

##### `requiresDuplicateDetection`<sup>Optional</sup> <a name="requiresDuplicateDetection" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection"></a>

```typescript
public readonly requiresDuplicateDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#status ServicebusTopic#status}.

---

##### `supportOrdering`<sup>Optional</sup> <a name="supportOrdering" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering"></a>

```typescript
public readonly supportOrdering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicebusTopicTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#timeouts ServicebusTopic#timeouts}

---

### ServicebusTopicTimeouts <a name="ServicebusTopicTimeouts" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.Initializer"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

const servicebusTopicTimeouts: servicebusTopic.ServicebusTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#create ServicebusTopic#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#read ServicebusTopic#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#update ServicebusTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#create ServicebusTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#read ServicebusTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/servicebus_topic#update ServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusTopicTimeoutsOutputReference <a name="ServicebusTopicTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicebusTopic } from '@cdktn/provider-azurerm'

new servicebusTopic.ServicebusTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicebusTopicTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

---



