# `streamAnalyticsOutputTable` Submodule <a name="`streamAnalyticsOutputTable` Submodule" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputTable <a name="StreamAnalyticsOutputTable" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table azurerm_stream_analytics_output_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

new streamAnalyticsOutputTable.StreamAnalyticsOutputTable(scope: Construct, id: string, config: StreamAnalyticsOutputTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig">StreamAnalyticsOutputTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig">StreamAnalyticsOutputTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetColumnsToRemove">resetColumnsToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

---

##### `resetColumnsToRemove` <a name="resetColumnsToRemove" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetColumnsToRemove"></a>

```typescript
public resetColumnsToRemove(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamAnalyticsOutputTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StreamAnalyticsOutputTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference">StreamAnalyticsOutputTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemoveInput">columnsToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKeyInput">rowKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemove">columnsToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKey">rowKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference">StreamAnalyticsOutputTableTimeoutsOutputReference</a>

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `columnsToRemoveInput`<sup>Optional</sup> <a name="columnsToRemoveInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemoveInput"></a>

```typescript
public readonly columnsToRemoveInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `rowKeyInput`<sup>Optional</sup> <a name="rowKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKeyInput"></a>

```typescript
public readonly rowKeyInput: string;
```

- *Type:* string

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobNameInput"></a>

```typescript
public readonly streamAnalyticsJobNameInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsOutputTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `columnsToRemove`<sup>Required</sup> <a name="columnsToRemove" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemove"></a>

```typescript
public readonly columnsToRemove: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKey"></a>

```typescript
public readonly rowKey: string;
```

- *Type:* string

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputTableConfig <a name="StreamAnalyticsOutputTableConfig" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

const streamAnalyticsOutputTableConfig: streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.partitionKey">partitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.rowKey">rowKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.table">table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.columnsToRemove">columnsToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}.

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}.

---

##### `rowKey`<sup>Required</sup> <a name="rowKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.rowKey"></a>

```typescript
public readonly rowKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}.

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.streamAnalyticsJobName"></a>

```typescript
public readonly streamAnalyticsJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}.

---

##### `columnsToRemove`<sup>Optional</sup> <a name="columnsToRemove" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.columnsToRemove"></a>

```typescript
public readonly columnsToRemove: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#timeouts StreamAnalyticsOutputTable#timeouts}

---

### StreamAnalyticsOutputTableTimeouts <a name="StreamAnalyticsOutputTableTimeouts" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

const streamAnalyticsOutputTableTimeouts: streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#create StreamAnalyticsOutputTable#create}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#delete StreamAnalyticsOutputTable#delete}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#read StreamAnalyticsOutputTable#read}. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#update StreamAnalyticsOutputTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#create StreamAnalyticsOutputTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#delete StreamAnalyticsOutputTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#read StreamAnalyticsOutputTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/stream_analytics_output_table#update StreamAnalyticsOutputTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputTableTimeoutsOutputReference <a name="StreamAnalyticsOutputTableTimeoutsOutputReference" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputTable } from '@cdktn/provider-azurerm'

new streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsOutputTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

---



