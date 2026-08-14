# `monitorScheduledQueryRulesLog` Submodule <a name="`monitorScheduledQueryRulesLog` Submodule" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesLog <a name="MonitorScheduledQueryRulesLog" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log azurerm_monitor_scheduled_query_rules_log}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

new monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog(scope: Construct, id: string, config: MonitorScheduledQueryRulesLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig">MonitorScheduledQueryRulesLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig">MonitorScheduledQueryRulesLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetAuthorizedResourceIds">resetAuthorizedResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria"></a>

```typescript
public putCriteria(value: MonitorScheduledQueryRulesLogCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorScheduledQueryRulesLogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

---

##### `resetAuthorizedResourceIds` <a name="resetAuthorizedResourceIds" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetAuthorizedResourceIds"></a>

```typescript
public resetAuthorizedResourceIds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorScheduledQueryRulesLog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MonitorScheduledQueryRulesLog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorScheduledQueryRulesLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorScheduledQueryRulesLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonitorScheduledQueryRulesLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference">MonitorScheduledQueryRulesLogCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference">MonitorScheduledQueryRulesLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIdsInput">authorizedResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteria"></a>

```typescript
public readonly criteria: MonitorScheduledQueryRulesLogCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference">MonitorScheduledQueryRulesLogCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorScheduledQueryRulesLogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference">MonitorScheduledQueryRulesLogTimeoutsOutputReference</a>

---

##### `authorizedResourceIdsInput`<sup>Optional</sup> <a name="authorizedResourceIdsInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIdsInput"></a>

```typescript
public readonly authorizedResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: MonitorScheduledQueryRulesLogCriteria;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

---

##### `authorizedResourceIds`<sup>Required</sup> <a name="authorizedResourceIds" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.authorizedResourceIds"></a>

```typescript
public readonly authorizedResourceIds: string[];
```

- *Type:* string[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesLogConfig <a name="MonitorScheduledQueryRulesLogConfig" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

const monitorScheduledQueryRulesLogConfig: monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.criteria"></a>

```typescript
public readonly criteria: MonitorScheduledQueryRulesLogCriteria;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#criteria MonitorScheduledQueryRulesLog#criteria}

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#data_source_id MonitorScheduledQueryRulesLog#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#location MonitorScheduledQueryRulesLog#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `authorizedResourceIds`<sup>Optional</sup> <a name="authorizedResourceIds" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.authorizedResourceIds"></a>

```typescript
public readonly authorizedResourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#description MonitorScheduledQueryRulesLog#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#enabled MonitorScheduledQueryRulesLog#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#id MonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#tags MonitorScheduledQueryRulesLog#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#timeouts MonitorScheduledQueryRulesLog#timeouts}

---

### MonitorScheduledQueryRulesLogCriteria <a name="MonitorScheduledQueryRulesLogCriteria" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

const monitorScheduledQueryRulesLogCriteria: monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.dimension">dimension</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]</code> | dimension block. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#metric_name MonitorScheduledQueryRulesLog#metric_name}. |

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.dimension"></a>

```typescript
public readonly dimension: IResolvable | MonitorScheduledQueryRulesLogCriteriaDimension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#dimension MonitorScheduledQueryRulesLog#dimension}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#metric_name MonitorScheduledQueryRulesLog#metric_name}.

---

### MonitorScheduledQueryRulesLogCriteriaDimension <a name="MonitorScheduledQueryRulesLogCriteriaDimension" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

const monitorScheduledQueryRulesLogCriteriaDimension: monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#values MonitorScheduledQueryRulesLog#values}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#operator MonitorScheduledQueryRulesLog#operator}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#name MonitorScheduledQueryRulesLog#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#values MonitorScheduledQueryRulesLog#values}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#operator MonitorScheduledQueryRulesLog#operator}.

---

### MonitorScheduledQueryRulesLogTimeouts <a name="MonitorScheduledQueryRulesLogTimeouts" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

const monitorScheduledQueryRulesLogTimeouts: monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#create MonitorScheduledQueryRulesLog#create}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#delete MonitorScheduledQueryRulesLog#delete}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#read MonitorScheduledQueryRulesLog#read}. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#update MonitorScheduledQueryRulesLog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#create MonitorScheduledQueryRulesLog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#delete MonitorScheduledQueryRulesLog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#read MonitorScheduledQueryRulesLog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/monitor_scheduled_query_rules_log#update MonitorScheduledQueryRulesLog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesLogCriteriaDimensionList <a name="MonitorScheduledQueryRulesLogCriteriaDimensionList" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

new monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get"></a>

```typescript
public get(index: number): MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorScheduledQueryRulesLogCriteriaDimension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]

---


### MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference <a name="MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

new monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorScheduledQueryRulesLogCriteriaDimension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>

---


### MonitorScheduledQueryRulesLogCriteriaOutputReference <a name="MonitorScheduledQueryRulesLogCriteriaOutputReference" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

new monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension">putDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimension` <a name="putDimension" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension"></a>

```typescript
public putDimension(value: IResolvable | MonitorScheduledQueryRulesLogCriteriaDimension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList">MonitorScheduledQueryRulesLogCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension"></a>

```typescript
public readonly dimension: MonitorScheduledQueryRulesLogCriteriaDimensionList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimensionList">MonitorScheduledQueryRulesLogCriteriaDimensionList</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: IResolvable | MonitorScheduledQueryRulesLogCriteriaDimension[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaDimension">MonitorScheduledQueryRulesLogCriteriaDimension</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorScheduledQueryRulesLogCriteria;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogCriteria">MonitorScheduledQueryRulesLogCriteria</a>

---


### MonitorScheduledQueryRulesLogTimeoutsOutputReference <a name="MonitorScheduledQueryRulesLogTimeoutsOutputReference" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorScheduledQueryRulesLog } from '@cdktn/provider-azurerm'

new monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorScheduledQueryRulesLog.MonitorScheduledQueryRulesLogTimeouts">MonitorScheduledQueryRulesLogTimeouts</a>

---



