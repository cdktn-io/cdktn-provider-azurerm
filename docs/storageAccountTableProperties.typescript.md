# `storageAccountTableProperties` Submodule <a name="`storageAccountTableProperties` Submodule" id="@cdktn/provider-azurerm.storageAccountTableProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountTableProperties <a name="StorageAccountTableProperties" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties azurerm_storage_account_table_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTableProperties(scope: Construct, id: string, config: StorageAccountTablePropertiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig">StorageAccountTablePropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig">StorageAccountTablePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics">putHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics">putMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics">resetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics">resetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | StorageAccountTablePropertiesCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putCorsRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---

##### `putHourMetrics` <a name="putHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics"></a>

```typescript
public putHourMetrics(value: StorageAccountTablePropertiesHourMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging"></a>

```typescript
public putLogging(value: StorageAccountTablePropertiesLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---

##### `putMinuteMetrics` <a name="putMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics"></a>

```typescript
public putMinuteMetrics(value: StorageAccountTablePropertiesMinuteMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountTablePropertiesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetHourMetrics` <a name="resetHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetHourMetrics"></a>

```typescript
public resetHourMetrics(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetMinuteMetrics` <a name="resetMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetMinuteMetrics"></a>

```typescript
public resetMinuteMetrics(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

storageAccountTableProperties.StorageAccountTableProperties.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageAccountTableProperties resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountTableProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountTableProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountTableProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule">corsRule</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput">hourMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput">minuteMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRule"></a>

```typescript
public readonly corsRule: StorageAccountTablePropertiesCorsRuleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList">StorageAccountTablePropertiesCorsRuleList</a>

---

##### `hourMetrics`<sup>Required</sup> <a name="hourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountTablePropertiesHourMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference">StorageAccountTablePropertiesHourMetricsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.logging"></a>

```typescript
public readonly logging: StorageAccountTablePropertiesLoggingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference">StorageAccountTablePropertiesLoggingOutputReference</a>

---

##### `minuteMetrics`<sup>Required</sup> <a name="minuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountTablePropertiesMinuteMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference">StorageAccountTablePropertiesMinuteMetricsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountTablePropertiesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference">StorageAccountTablePropertiesTimeoutsOutputReference</a>

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | StorageAccountTablePropertiesCorsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---

##### `hourMetricsInput`<sup>Optional</sup> <a name="hourMetricsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.hourMetricsInput"></a>

```typescript
public readonly hourMetricsInput: StorageAccountTablePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.loggingInput"></a>

```typescript
public readonly loggingInput: StorageAccountTablePropertiesLogging;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---

##### `minuteMetricsInput`<sup>Optional</sup> <a name="minuteMetricsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.minuteMetricsInput"></a>

```typescript
public readonly minuteMetricsInput: StorageAccountTablePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountTablePropertiesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTableProperties.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountTablePropertiesConfig <a name="StorageAccountTablePropertiesConfig" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesConfig: storageAccountTableProperties.StorageAccountTablePropertiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule">corsRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics">hourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics">minuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#storage_account_id StorageAccountTableProperties#storage_account_id}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | StorageAccountTablePropertiesCorsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#cors_rule StorageAccountTableProperties#cors_rule}

---

##### `hourMetrics`<sup>Optional</sup> <a name="hourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.hourMetrics"></a>

```typescript
public readonly hourMetrics: StorageAccountTablePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#hour_metrics StorageAccountTableProperties#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#id StorageAccountTableProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.logging"></a>

```typescript
public readonly logging: StorageAccountTablePropertiesLogging;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#logging StorageAccountTableProperties#logging}

---

##### `minuteMetrics`<sup>Optional</sup> <a name="minuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.minuteMetrics"></a>

```typescript
public readonly minuteMetrics: StorageAccountTablePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#minute_metrics StorageAccountTableProperties#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountTablePropertiesTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#timeouts StorageAccountTableProperties#timeouts}

---

### StorageAccountTablePropertiesCorsRule <a name="StorageAccountTablePropertiesCorsRule" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesCorsRule: storageAccountTableProperties.StorageAccountTablePropertiesCorsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}. |

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_headers StorageAccountTableProperties#allowed_headers}.

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_methods StorageAccountTableProperties#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#allowed_origins StorageAccountTableProperties#allowed_origins}.

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#exposed_headers StorageAccountTableProperties#exposed_headers}.

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#max_age_in_seconds StorageAccountTableProperties#max_age_in_seconds}.

---

### StorageAccountTablePropertiesHourMetrics <a name="StorageAccountTablePropertiesHourMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesHourMetrics: storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis">includeApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesLogging <a name="StorageAccountTablePropertiesLogging" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesLogging: storageAccountTableProperties.StorageAccountTablePropertiesLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete">delete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read">read</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write">write</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#write StorageAccountTableProperties#write}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesMinuteMetrics <a name="StorageAccountTablePropertiesMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesMinuteMetrics: storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis">includeApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#version StorageAccountTableProperties#version}.

---

##### `includeApis`<sup>Optional</sup> <a name="includeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#include_apis StorageAccountTableProperties#include_apis}.

---

##### `retentionPolicyDays`<sup>Optional</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#retention_policy_days StorageAccountTableProperties#retention_policy_days}.

---

### StorageAccountTablePropertiesTimeouts <a name="StorageAccountTablePropertiesTimeouts" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

const storageAccountTablePropertiesTimeouts: storageAccountTableProperties.StorageAccountTablePropertiesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#create StorageAccountTableProperties#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#delete StorageAccountTableProperties#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#read StorageAccountTableProperties#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/storage_account_table_properties#update StorageAccountTableProperties#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountTablePropertiesCorsRuleList <a name="StorageAccountTablePropertiesCorsRuleList" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get"></a>

```typescript
public get(index: number): StorageAccountTablePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountTablePropertiesCorsRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>[]

---


### StorageAccountTablePropertiesCorsRuleOutputReference <a name="StorageAccountTablePropertiesCorsRuleOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountTablePropertiesCorsRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesCorsRule">StorageAccountTablePropertiesCorsRule</a>

---


### StorageAccountTablePropertiesHourMetricsOutputReference <a name="StorageAccountTablePropertiesHourMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountTablePropertiesHourMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesHourMetrics">StorageAccountTablePropertiesHourMetrics</a>

---


### StorageAccountTablePropertiesLoggingOutputReference <a name="StorageAccountTablePropertiesLoggingOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput">deleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput">readInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput">writeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete">delete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read">read</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write">write</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.readInput"></a>

```typescript
public readonly readInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.writeInput"></a>

```typescript
public readonly writeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.delete"></a>

```typescript
public readonly delete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.read"></a>

```typescript
public readonly read: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.write"></a>

```typescript
public readonly write: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountTablePropertiesLogging;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesLogging">StorageAccountTablePropertiesLogging</a>

---


### StorageAccountTablePropertiesMinuteMetricsOutputReference <a name="StorageAccountTablePropertiesMinuteMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis">resetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">resetRetentionPolicyDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeApis` <a name="resetIncludeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```typescript
public resetIncludeApis(): void
```

##### `resetRetentionPolicyDays` <a name="resetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```typescript
public resetRetentionPolicyDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput">includeApisInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">retentionPolicyDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis">includeApis</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">retentionPolicyDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeApisInput`<sup>Optional</sup> <a name="includeApisInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```typescript
public readonly includeApisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDaysInput`<sup>Optional</sup> <a name="retentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```typescript
public readonly retentionPolicyDaysInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `includeApis`<sup>Required</sup> <a name="includeApis" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```typescript
public readonly includeApis: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionPolicyDays`<sup>Required</sup> <a name="retentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```typescript
public readonly retentionPolicyDays: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageAccountTablePropertiesMinuteMetrics;
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesMinuteMetrics">StorageAccountTablePropertiesMinuteMetrics</a>

---


### StorageAccountTablePropertiesTimeoutsOutputReference <a name="StorageAccountTablePropertiesTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccountTableProperties } from '@cdktn/provider-azurerm'

new storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountTablePropertiesTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageAccountTableProperties.StorageAccountTablePropertiesTimeouts">StorageAccountTablePropertiesTimeouts</a>

---



