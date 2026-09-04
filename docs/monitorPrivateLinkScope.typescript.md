# `monitorPrivateLinkScope` Submodule <a name="`monitorPrivateLinkScope` Submodule" id="@cdktn/provider-azurerm.monitorPrivateLinkScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorPrivateLinkScope <a name="MonitorPrivateLinkScope" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope azurerm_monitor_private_link_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

new monitorPrivateLinkScope.MonitorPrivateLinkScope(scope: Construct, id: string, config: MonitorPrivateLinkScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig">MonitorPrivateLinkScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig">MonitorPrivateLinkScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetIngestionAccessMode">resetIngestionAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetQueryAccessMode">resetQueryAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorPrivateLinkScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestionAccessMode` <a name="resetIngestionAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetIngestionAccessMode"></a>

```typescript
public resetIngestionAccessMode(): void
```

##### `resetQueryAccessMode` <a name="resetQueryAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetQueryAccessMode"></a>

```typescript
public resetQueryAccessMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorPrivateLinkScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MonitorPrivateLinkScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorPrivateLinkScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorPrivateLinkScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonitorPrivateLinkScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference">MonitorPrivateLinkScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessModeInput">ingestionAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessModeInput">queryAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessMode">ingestionAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessMode">queryAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorPrivateLinkScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference">MonitorPrivateLinkScopeTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestionAccessModeInput`<sup>Optional</sup> <a name="ingestionAccessModeInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessModeInput"></a>

```typescript
public readonly ingestionAccessModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryAccessModeInput`<sup>Optional</sup> <a name="queryAccessModeInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessModeInput"></a>

```typescript
public readonly queryAccessModeInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorPrivateLinkScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestionAccessMode`<sup>Required</sup> <a name="ingestionAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.ingestionAccessMode"></a>

```typescript
public readonly ingestionAccessMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryAccessMode`<sup>Required</sup> <a name="queryAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.queryAccessMode"></a>

```typescript
public readonly queryAccessMode: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorPrivateLinkScopeConfig <a name="MonitorPrivateLinkScopeConfig" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.Initializer"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

const monitorPrivateLinkScopeConfig: monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.ingestionAccessMode">ingestionAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.queryAccessMode">queryAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#name MonitorPrivateLinkScope#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#resource_group_name MonitorPrivateLinkScope#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#id MonitorPrivateLinkScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestionAccessMode`<sup>Optional</sup> <a name="ingestionAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.ingestionAccessMode"></a>

```typescript
public readonly ingestionAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#ingestion_access_mode MonitorPrivateLinkScope#ingestion_access_mode}.

---

##### `queryAccessMode`<sup>Optional</sup> <a name="queryAccessMode" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.queryAccessMode"></a>

```typescript
public readonly queryAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#query_access_mode MonitorPrivateLinkScope#query_access_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#tags MonitorPrivateLinkScope#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorPrivateLinkScopeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#timeouts MonitorPrivateLinkScope#timeouts}

---

### MonitorPrivateLinkScopeTimeouts <a name="MonitorPrivateLinkScopeTimeouts" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.Initializer"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

const monitorPrivateLinkScopeTimeouts: monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#create MonitorPrivateLinkScope#create}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#delete MonitorPrivateLinkScope#delete}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#read MonitorPrivateLinkScope#read}. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#update MonitorPrivateLinkScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#create MonitorPrivateLinkScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#delete MonitorPrivateLinkScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#read MonitorPrivateLinkScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_private_link_scope#update MonitorPrivateLinkScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorPrivateLinkScopeTimeoutsOutputReference <a name="MonitorPrivateLinkScopeTimeoutsOutputReference" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorPrivateLinkScope } from '@cdktn/provider-azurerm'

new monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorPrivateLinkScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.monitorPrivateLinkScope.MonitorPrivateLinkScopeTimeouts">MonitorPrivateLinkScopeTimeouts</a>

---



